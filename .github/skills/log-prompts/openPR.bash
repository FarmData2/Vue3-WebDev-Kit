#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

# Get the current branch name
CURRENT_BRANCH=$(git branch --show-current)

# Check if we're on a branch (not in detached HEAD state)
if [ -z "$CURRENT_BRANCH" ]; then
  echo "Error: Not on a branch"
  exit 1
fi

# Check if there's already an open pull request for this branch
EXISTING_PR=$(gh pr list --head "$CURRENT_BRANCH" --state open --json number --jq '.[0].number' 2>/dev/null)

if [ -n "$EXISTING_PR" ]; then
  # PR already exists, do nothing
  exit 0
fi

# No PR exists, prompt the user
echo ""
echo "No open pull request found for branch: $CURRENT_BRANCH"
read -p "Do you want to create a pull request? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Pull request creation cancelled."
  exit 0
fi

# Read PULL_REQUEST_TEMPLATE.md and extract options dynamically
TEMPLATE_FILE="$REPO_ROOT/.github/PULL_REQUEST_TEMPLATE.md"

if [ ! -f "$TEMPLATE_FILE" ]; then
  echo "Error: $TEMPLATE_FILE not found"
  exit 1
fi

# Extract Type of Work options (between "### Type of Work" and "### Topic")
mapfile -t TYPE_OPTIONS < <(sed -n '/^### Type of Work/,/^### Topic/p' "$TEMPLATE_FILE" | grep -oP '(?<=- \[ \] - )\S+' | grep -v '^$')

# Extract Topic options (between "### Topic" and "### Time Estimate")
mapfile -t TOPIC_OPTIONS < <(sed -n '/^### Topic/,/^### Time Estimate/p' "$TEMPLATE_FILE" | grep -oP '(?<=- \[ \] - ).+' | sed 's/^[[:space:]]*//')

# Ask for Type of Work
echo ""
echo "Select Type of Work:"
for i in "${!TYPE_OPTIONS[@]}"; do
  echo "$((i + 1))) ${TYPE_OPTIONS[$i]}"
done
read -p "Enter your choice (1-${#TYPE_OPTIONS[@]}): " -r TYPE_CHOICE

if [[ ! $TYPE_CHOICE =~ ^[0-9]+$ ]] || [ "$TYPE_CHOICE" -lt 1 ] || [ "$TYPE_CHOICE" -gt ${#TYPE_OPTIONS[@]} ]; then
  echo "Invalid choice. Exiting."
  exit 1
fi

TYPE_OF_WORK="${TYPE_OPTIONS[$((TYPE_CHOICE - 1))]}"

# Ask for Topic
echo ""
echo "Select Topic:"
for i in "${!TOPIC_OPTIONS[@]}"; do
  echo "$((i + 1))) ${TOPIC_OPTIONS[$i]}"
done
read -p "Enter your choice (1-${#TOPIC_OPTIONS[@]}): " -r TOPIC_CHOICE

if [[ ! $TOPIC_CHOICE =~ ^[0-9]+$ ]] || [ "$TOPIC_CHOICE" -lt 1 ] || [ "$TOPIC_CHOICE" -gt ${#TOPIC_OPTIONS[@]} ]; then
  echo "Invalid choice. Exiting."
  exit 1
fi

TOPIC="${TOPIC_OPTIONS[$((TOPIC_CHOICE - 1))]}"

# Check if the active branch has any commits
COMMIT_COUNT=$(git rev-list --count main..$CURRENT_BRANCH 2>/dev/null || echo "0")

if [ "$COMMIT_COUNT" -eq 0 ]; then
  # No commits on this branch, create an empty commit
  COMMIT_MESSAGE="Starting $TYPE_OF_WORK - $TOPIC"
  git commit --allow-empty -m "$COMMIT_MESSAGE"
fi

# Create the PR with a title that includes the Type of Work and Topic
PR_TITLE="$TYPE_OF_WORK - $TOPIC"

# Read the PULL_REQUEST_TEMPLATE and check the selected Type of Work and Topic
PR_BODY=$(cat "$TEMPLATE_FILE" | sed "s/- \[ \] - $TYPE_OF_WORK/- [X] - $TYPE_OF_WORK/" | sed "s/- \[ \] - $TOPIC/- [X] - $TOPIC/")

git push upstream "$CURRENT_BRANCH"
gh pr create --base main --head "$CURRENT_BRANCH" --title "$PR_TITLE" --body "$PR_BODY"
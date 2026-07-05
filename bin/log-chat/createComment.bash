#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

# Get the current branch name
CURRENT_BRANCH=$(git branch --show-current)

# Find the open pull request for the current branch
PR_NUMBER=$(gh pr list --head "$CURRENT_BRANCH" --state open --json number --jq '.[0].number' 2>/dev/null)

if [ -z "$PR_NUMBER" ]; then
  echo "Error: No open pull request found for branch $CURRENT_BRANCH."
  exit 1
fi

# Find the chat.json file
CHAT_LOG=$(find "$REPO_ROOT" -name "chat.json" -type f | head -n 1)

if [ -z "$CHAT_LOG" ]; then
  echo "Error: chat.json not found. Be sure to export the chat log."
  exit 1
fi

# Find the ID of the first request in the chat.json file
CHAT_HASH=$(jq -r '.requests[0].requestId' "$CHAT_LOG")

# Find the processed-chat.txt file
PROCESSED_CHAT_FILE=$(find "$REPO_ROOT" -name "processed-chat.txt" -type f | head -n 1)

if [ -z "$PROCESSED_CHAT_FILE" ]; then
  echo "Exported chat logs were not found."
  echo "Be sure to export the chat log to a location within the repository."
  exit 1
fi

PROMPTS=$(cat "$PROCESSED_CHAT_FILE")

# Search the comments for the hidden message ID
EXISTING_COMMENT=$(gh pr view "$PR_NUMBER" --json comments --jq ".comments[] | select(.body | contains(\"<!-- $CHAT_HASH -->\"))" | head -n 1)

TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

if [ -n "$EXISTING_COMMENT" ]; then
  # If comment found, update it
  COMMENT_ID=$(echo "$EXISTING_COMMENT" | jq -r '.id')
  
  # Retain the original creation time
  ORIGINAL_TIME=$(echo "$EXISTING_COMMENT" | jq -r '.body' | grep -oP 'Created: \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}')
  if [ -n "$ORIGINAL_TIME" ]; then
    TIME_LINE="$ORIGINAL_TIME"
  else
    TIME_LINE="Created: $TIMESTAMP"
  fi

  # Construct new body
  NEW_BODY=$(cat <<EOF
# Copilot Chat Log
$TIME_LINE
<!-- $CHAT_HASH -->

$PROMPTS
EOF
)
  
  gh api graphql -f query='mutation($id: ID!, $body: String!) { updateIssueComment(input: {id: $id, body: $body}) { issueComment { id } } }' -f id="$COMMENT_ID" -f body="$NEW_BODY" --silent
  echo "Updated existing Copilot Chat Log comment on PR #$PR_NUMBER."
else
  # Otherwise create a new comment
  NEW_BODY=$(cat <<EOF
# Copilot Chat Log
Created: $TIMESTAMP
<!-- $CHAT_HASH -->

$PROMPTS
EOF
)
  gh pr comment "$PR_NUMBER" --body "$NEW_BODY" 2> /dev/null
  echo "Created new Copilot Chat Log comment on PR #$PR_NUMBER."
fi

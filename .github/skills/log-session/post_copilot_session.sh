#!/bin/bash

# Script to post the current Copilot session to a PR comment.
# Usage: ./bin/post_copilot_session.sh "Session Name" "Session Content"

SESSION_NAME=$1
SESSION_CONTENT=$2
DATE_TIME=$(date '+%Y-%m-%d %H:%M:%S')
MODEL_USED="Gemini 3 Flash (Preview)"

if [ -z "$SESSION_NAME" ] || [ -z "$SESSION_CONTENT" ]; then
    echo "Usage: $0 \"Session Name\" \"Session Content\""
    exit 1
fi

BRANCH=$(git branch --show-current)
UPSTREAM=$(gh repo view --json nameWithOwner -q .nameWithOwner)

# 1. Check if a pull request is open for the active branch
PR_NUMBER=$(gh pr list --head "$BRANCH" --json number --jq '.[0].number')

if [ -z "$PR_NUMBER" ]; then
    echo "No open pull request found for branch: $BRANCH"
    
    # 2. Check if the current user is a maintainer
    IS_MAINTAINER=$(gh api "repos/$UPSTREAM" --jq '.permissions.maintain')
    
    if [ "$IS_MAINTAINER" = "true" ]; then
        # Check if we are in a non-interactive shell (like a skill)
        if [ -t 0 ]; then
            read -p "You are a maintainer. Would you like to create a new pull request for $BRANCH? (y/n): " -n 1 -r
            echo
            if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                echo "Operation cancelled by user."
                exit 0
            fi
        else
            echo "Non-interactive shell detected. Skipping PR creation for maintainer."
            exit 1
        fi
    fi
    
    echo "Creating a new pull request..."
    PR_URL=$(gh pr create --title "Session Log: $BRANCH" --body "Automated pull request for session logging." --base main)
    PR_NUMBER=$(echo "$PR_URL" | grep -oE '[0-9]+$')
    
    if [ -z "$PR_NUMBER" ]; then
        echo "Failed to create or retrieve PR number."
        exit 1
    fi
    echo "Created PR #$PR_NUMBER"
fi

# 3. Check for an existing comment for this session to update it
# Using gh api to find a comment that starts with the session header.
EXISTING_COMMENT_ID=$(gh api "repos/$UPSTREAM/issues/$PR_NUMBER/comments" --jq ".[] | select(.body | startswith(\"### Copilot Session: $SESSION_NAME\")) | .id" | head -n 1)

# 4. Prepare the comment body
COMMENT_BODY=$(cat <<EOF
### Copilot Session: $SESSION_NAME
**Date/Time:** $DATE_TIME (Started)
**Model:** $MODEL_USED

#### Transcript
$SESSION_CONTENT
EOF
)

# 5. Post or update the session information
if [ -n "$EXISTING_COMMENT_ID" ]; then
    echo "Updating existing session log comment (ID: $EXISTING_COMMENT_ID) on PR #$PR_NUMBER..."
    gh api -X PATCH "repos/$UPSTREAM/issues/comments/$EXISTING_COMMENT_ID" -f body="$COMMENT_BODY" > /dev/null
else
    echo "Posting new session log to PR #$PR_NUMBER..."
    gh pr comment "$PR_NUMBER" --body "$COMMENT_BODY"
fi

echo "Done."

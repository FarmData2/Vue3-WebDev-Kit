#!/bin/bash

# 1. Find the open pull request to the upstream for the active branch.
CURRENT_BRANCH=$(git branch --show-current)
PR_INFO=$(gh pr list --head "$CURRENT_BRANCH" --state open --json number,url --jq '.[0]')

if [[ -z "$PR_INFO" || "$PR_INFO" == "null" ]]; then
    echo "No open pull request found for branch '$CURRENT_BRANCH'."
    echo "Please create a pull request before running this skill."
    exit 1
fi

PR_NUMBER=$(echo "$PR_INFO" | jq -r '.number')
CHAT_FILE="$(dirname "$0")/chat.txt"

if [[ ! -f "$CHAT_FILE" ]]; then
    echo "Error: $CHAT_FILE not found."
    exit 1
fi

# 2. Find all comments on the pull request that have the heading "Copilot Chat Log".
# We use the GitHub CLI to get all comments.
COMMENTS=$(gh pr view "$PR_NUMBER" --json comments --jq '.comments')

# Function to extract User prompts from a comment body
get_user_prompts() {
    echo "$1" | grep "^User:"
}

# 3. Check if all "User:" prompts in existing "Copilot Chat Log" comments are in chat.txt
ALL_IN_CHAT=true
MATCHING_COMMENT_ID=""
MATCHING_COMMENT_BODY=""

# We'll iterate through comments that have the heading
LOG_COMMENTS=$(echo "$COMMENTS" | jq -c '.[] | select(.body | startswith("# Copilot Chat Log"))')

if [[ -z "$LOG_COMMENTS" ]]; then
    ALL_IN_CHAT=false
else
    # Check each log comment
    while read -r comment; do
        BODY=$(echo "$comment" | jq -r '.body')
        URL=$(echo "$comment" | jq -r '.url')
        # Extract numeric ID from URL (e.g., ...#issuecomment-123456)
        ID=$(echo "$URL" | grep -oE "[0-9]+$")
        
        # Get all User lines from this comment
        PROMPTS=$(get_user_prompts "$BODY")
        
        while read -r prompt; do
            if [[ -n "$prompt" ]]; then
                if ! grep -qF "$prompt" "$CHAT_FILE"; then
                    ALL_IN_CHAT=false
                    break 2
                fi
            fi
        done <<< "$PROMPTS"
        
        # If we reach here for this comment, it matches. 
        # We'll keep track of the last matching one to update it.
        MATCHING_COMMENT_ID="$ID"
        MATCHING_COMMENT_BODY="$BODY"
    done <<< "$LOG_COMMENTS"
fi

# 4. Update or Create
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S %Z")
CHAT_CONTENT=$(cat "$CHAT_FILE")

if [[ "$ALL_IN_CHAT" == "true" && -n "$MATCHING_COMMENT_ID" ]]; then
    # We found a matching log, append/update it.
    # The requirement says "append them to the comment". 
    # Usually this means refreshing the comment content to match the full chat history.
    # We keep the original heading and timestamp if possible, or just overwrite.
    # Let's preserve the original header and timestamp from the matching comment if we can.
    HEADER_AND_TIME=$(echo "$MATCHING_COMMENT_BODY" | head -n 2)
    NEW_BODY=$(printf "%s\n\n%s" "$HEADER_AND_TIME" "$CHAT_CONTENT")
    
    gh api -X PATCH "repos/{owner}/{repo}/issues/comments/$MATCHING_COMMENT_ID" -f body="$NEW_BODY" > /dev/null
    echo "Updated existing Copilot Chat Log comment ($MATCHING_COMMENT_ID)."
else
    # Add a new "Copilot Chat Log" comment.
    NEW_BODY=$(printf "# Copilot Chat Log\n%s\n\n%s" "$TIMESTAMP" "$CHAT_CONTENT")
    gh pr comment "$PR_NUMBER" --body "$NEW_BODY"
    echo "Created new Copilot Chat Log comment."
fi


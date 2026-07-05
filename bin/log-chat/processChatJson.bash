#!/bin/bash

# Path to your JSON file
REPO_ROOT=$(git rev-parse --show-toplevel)
CHAT_LOG=$(find "$REPO_ROOT" -name "chat.json" -type f)
CHAT_LOG_DIR=$(dirname "$CHAT_LOG")
POST_PROCESSED_CHAT_LOG="$CHAT_LOG_DIR/processed-chat.txt"

# Copy the message texts into the processed-chat.txt file.

jq -j '.requests[].message.text + "\u0000"' "$CHAT_LOG" | while IFS= read -r -d '' msg; do
  echo "---" >> "$POST_PROCESSED_CHAT_LOG"
  echo "" >> "$POST_PROCESSED_CHAT_LOG"
  echo "$msg" >> "$POST_PROCESSED_CHAT_LOG"
  echo "" >> "$POST_PROCESSED_CHAT_LOG"
done

echo --- >> "$POST_PROCESSED_CHAT_LOG"
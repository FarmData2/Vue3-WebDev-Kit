#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

# Delete any chat.json logs that are found in the repository.
# Search recursively from the repository root to find all chat.json files
CHAT_LOGS=$(find "$REPO_ROOT" -name "chat.json" -type f)
if [ -n "$CHAT_LOGS" ]; then
  echo "Deleting chat.json file(s)."
  rm -f $CHAT_LOGS
fi

# Delete any processed-chat.txt files that are found in the repository.
PROCESSED_CHAT_LOGS=$(find "$REPO_ROOT" -name "processed-chat.txt" -type f)
if [ -n "$PROCESSED_CHAT_LOGS" ]; then
  echo "Deleting processed-chat.txt file(s)."
  rm -f $PROCESSED_CHAT_LOGS
fi
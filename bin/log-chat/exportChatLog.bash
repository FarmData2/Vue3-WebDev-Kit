#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

echo "Exporting chat log. Press Enter or click OK to accept default location."
curl -s -o /dev/null -X POST http://localhost:3000/execute \
  -H "Content-Type: application/json" \
  -d '{"command": "workbench.action.chat.export"}' 2> /dev/null

# Make sure the chat log was saved in the repository.
CHAT_LOGS=$(find "$REPO_ROOT" -name "chat.json" -type f)
if [ -z "$CHAT_LOGS" ]; then
  echo "No chat.json files found in the repository."
  echo "Be sure to export the chat log somewhere in the repository."
  exit 1
fi

# Display a message if the chat log is empty.
if grep -q '"requests": \[\]$' "$CHAT_LOGS"; then
  echo "You seem to have exported an empty chat log."
  echo "Be sure to have a chat open when you use the log-chat.bash script."
  exit 1
fi

exit 0
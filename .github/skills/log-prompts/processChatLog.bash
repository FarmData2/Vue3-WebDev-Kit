#!/bin/bash

# Path to the chat log file
CHAT_FILE="$(dirname "$0")/chat.txt"

# Check if the chat file exists
if [[ ! -f "$CHAT_FILE" ]]; then
    echo "Error: $CHAT_FILE not found."
    exit 1
fi

TEMP_FILE=$(mktemp)
# Extract prompts, removing "User:" prefix but adding/preserving "---" separator
awk '/^User:/ { 
    print "---"; 
    sub(/^User: */, ""); 
    print; 
    p=1; 
    next 
} /^Assistant:/ {p=0} p' "$CHAT_FILE" > "$TEMP_FILE"
mv "$TEMP_FILE" "$CHAT_FILE"

echo "Processed $CHAT_FILE: User prompts extracted and separators preserved."

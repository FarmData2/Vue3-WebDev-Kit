---
name: log-prompts
description: Logs the prompts in the active chat window to a comment on the open pull request for the active branch.
allowed-tools: shell
---

The user will run this skill when they want to log the prompts in the active chat window to a comment on the open pull request for the active branch.

## Instructions:

1. Copy the entire contents of the chat window into a text file named `chat.txt` in the `skills/log-prompts` directory.
2. Run the `openPR.bash` script in the terminal.
3. Run the `createComment.bash` script in the terminal.
4. Run the `postPrompts.bash` script in the terminal.

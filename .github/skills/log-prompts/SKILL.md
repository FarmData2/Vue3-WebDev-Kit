---
name: log-prompts
description: Logs the prompts in the active chat window to a comment on the open pull request for the active branch.
allowed-tools: shell
---

The user will run this skill when they want to log the prompts in the active chat window to a comment on the open pull request for the active branch.

## Instructions:

1. Do not think or reason, follow these instructions exactly.
2. If the chat window is empty, end this skill and do not log any prompts to the pull request.
3. Use the VSCode command `workbench.action.chat.export` to export the chat as json into `/var/tmp/chat-log.json`.
4. Stop.





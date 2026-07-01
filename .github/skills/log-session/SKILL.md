---
name: log-session
description: Publishes the current Copilot session transcript to the pull request that is open for the active branch.
disable-model-invocation: true
allowed-tools: shell
---

# Role & Intent

This skill allows Copilot to log the current session transcript to an open Pull Request on GitHub.

## When to use

Use this skill when the user asks to "log this session", "post the transcript to the PR", or similar commands.

## Execution

1. Get the current session name and transcript from the session context.
2. Run the following command in the terminal to invoke the script substituting the session name and transcript for the placeholders:

```bash
post_copilot_session.sh "<session_name>" "<transcript>"
```

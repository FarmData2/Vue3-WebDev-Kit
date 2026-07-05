#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)
cd "$REPO_ROOT/bin/log-chat" || exit 1

./openPR.bash && \
./cleanUp.bash && \
./exportChatLog.bash && \
./processChatJson.bash && \
./createComment.bash

./cleanUp.bash
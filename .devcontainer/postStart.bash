setsid --fork python3 \
  -m http.server 8000 \
  --directory /workspaces/Vue3-WebDev-Kit/ \
  > /dev/null 2>&1

# Set the upstream remote to the same as the origin remote if it is not already set
if ! git remote | grep -q "^upstream$"; then
  ORIGIN_URL=$(git remote get-url origin)
  git remote add upstream "$ORIGIN_URL"
fi

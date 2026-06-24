setsid --fork python3 \
  -m http.server 8000 \
  --directory /workspaces/Vue3-WebDev-Kit/ \
  > /dev/null 2>&1
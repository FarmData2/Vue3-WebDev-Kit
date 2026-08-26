echo -n "Checking for servers ..."
for i in {1..15}; do
# check for webserver using curl
  VNC_RUNNING=$(curl -Is http://localhost:6901 2> /dev/null | grep "HTTP/1.1 200 OK")
  WEB_SERVER_RUNNING=$(curl -Is http://localhost:8000 2> /dev/null | grep "HTTP/1.0 200 OK")
  COMMAND_SERVER_RUNNING=$(curl -Is http://localhost:3000 2> /dev/null | grep "HTTP/1.1 200 OK")

  if [ -d web-projects/backend ]; then
    JSON_SERVER_RUNNING=$(curl -Is http://localhost:8100 2> /dev/null | grep "HTTP/1.1 200 OK")
  else 
    JSON_SERVER_RUNNING="skip"
  fi

  # If all servers are running, print a message and exit
  if [ -n "$VNC_RUNNING" ] && [ -n "$WEB_SERVER_RUNNING" ] && [ -n "$COMMAND_SERVER_RUNNING" ] && [ -n "$JSON_SERVER_RUNNING" ]; then
    echo ""
    echo ""
    echo "Web server found at http://localhost:8000."
    echo "noVNC server found at http://localhost:6901."
    if [ -d web-projects/backend ]; then
      echo "JSON server found at http://localhost:8100."
    fi
    echo "VSCode command server found."
    echo ""
    echo "*****************************************"
    echo "The Vue3 WebDev Kit is now ready for use."
    echo "*****************************************"
    echo ""
    exit 0
  else
    echo -n "."
  fi
  sleep 1
done

echo ""
echo ""
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "One of the necessary servers did not start."
echo "Try stopping and restarting your codespace."
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo ""
exit -1
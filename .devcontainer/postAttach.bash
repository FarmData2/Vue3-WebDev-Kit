echo -n "Checking for the web server ..."
for i in {1..15}; do
# check for webserver using curl
  if curl -fs http://localhost:8000 >/dev/null; then
    echo ""
    echo ""
    echo "Web server found at http://localhost:8000."
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
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "The Web server did not start."
echo ""
echo "Use the commands below to start the web server manually."
echo ""
echo "  ./.devcontainer/postStart.bash"
echo "  ./.devcontainer/postAttach.bash"
echo ""
echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
exit -1
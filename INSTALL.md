# Installing the Vue3-WebDev-Kit

Installation of the Vue3-WebDev-Kit involves creating a fork of the upstream repository and creating a GitHub Codespace from your fork.

## Use a Chromium Based Browser

1. Ensure that you are using the [Chrome browser](https://www.google.com/chrome/dr/download/) or a [Chromium compatible browser](<https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium>).
   - GitHub Codespaces is optimized for Chromium based browsers and some features may not work when used in a non-Chromium based browser.

## Creating a Fork

1. [Create a GitHub account](https://github.com/signup?source=login) if you do not already have one, or want to use a different one for this work.
2. [Log into your GitHub account](https://github.com/login), if you are not already logged in.
3. Visit the upstream repository at the URL provided to you by your instructor.
4. [Create a fork of the upstream repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=webui#forking-a-repository) into your own GitHub space
5. Visit your [GitHub space](https://github.com/) and confirm that you have successfully created a fork.

## Creating a Codespace

1. Open your fork of the upstream repository in your [GitHub space](https://github.com/).
2. [Create a codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository?tool=webui#creating-a-codespace-for-a-repository) from your fork.
3. As the GitHub Codespace opens you will be asked several times to trust the repository you are opening. Trusting the codespace allows scripts from the repository to run on startup. Granting permission for these scripts to run is necessary to make the codespace fully functional.
   - These scripts install dependencies, do some configuration, and check that the necessary services are running.
   - If you would like to inspect the scripts prior to trusting them, they can be found in the [`.devcontainer` directory](https://github.com/FarmData2/Vue3-WebDev-Kit/tree/main/.devcontainer). Start with the `devcontainer.json` file and then inspect the scripts that it runs as its `postCreateCommand`, `postStartCommand` and `postAttachCommand`.
4. Wait for the codespace to be created.
   - Creating a new codespace takes a few minutes.
   - The codespace has been fully created and is ready for use when you see the following output in the `TERMINAL` at the bottom of the browser window.
     ```text
     *****************************************
     The Vue3 WebDev Kit is now ready for use.
     *****************************************
     ```
5. Return to the `README.md` file and continue on to the steps involving the `CONTRIBUTING.md` file.

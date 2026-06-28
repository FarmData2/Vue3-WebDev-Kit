# Contributing to Vue3-WebDev-Kit

When working on tutorials and extensions in the Vue3-WebDev-Kit you will be working in a style that is typical of a contributor to an open source project. Each tutorial and each extension in the kit is given by a ticket in the issue tracker. You will solve the issue described in the ticket. These issues will have you build some artifacts as you follow along with tutorials and then extending them. You will submit your work by making a pull request for your feature branch.

## Contribution Workflow

The sections below outline how you can complete the different things that you will need to do while working on the tutorials and extensions in this kit. Clicking the &#9654; beside a step will expand the "Details" section, which will provide specific Git commands and other instructions that will be useful until you have used them enough to remember them.

### Starting a Tutorial

Use the following steps to start working on a new tutorial.

1. <details>
   <summary>Log into your GitHub account.</summary>

   This link will take you to the [GitHub login page](https://github.com/login), if you are not already logged in. If you are logged in it will take you to your personal GitHub page.

   </details>

2. <details>
   <summary>Open your codespace.</summary>

   This link will take you to a page where you can [open your codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace#opening-an-existing-codespace-from-the-your-codespaces-page), if it is not already open.

3. <details>
   <summary>Synchronize your main branch with the upstream.</summary>

   Synchronizing your `main` branch ensures that you are beginning your new work from the most up to date version of the project.
   <br><br>
   Running the commands below in the terminal in your codespace is one way to synchronize your `main` branch.

   ```bash
   git switch main
   git pull --ff-only upstream main
   git push origin main
   ```

   </details>

4. <details>
   <summary>Create and switch to a new feature branch.</summary>

   Running the commands below in the terminal in your codespace is one way to create and switch to a new feature branch.
   <br><br>
   **Note that you will want to change the branch name from `tutorial-01` when working on later tutorials.**

   ```bash
   git switch main
   git branch tutorial-01
   git switch tutorial-o1
   ```

   </details>

5. <details>
   <summary>Make a pull request for your feature branch.</summary>

   Even though you haven't done any work this is the right time to create the pull request that you'll use to turn in your work. Creating a pull request early lets the instructor know you are working and gives you a place to ask questions about your work.
   <br><br>
   Running the commands below in the terminal in your codespace creates an empty commit so that you can create your pull request.

   ```bash
   git commit --allow-empty -m "Starting tutorial-01"
   git push origin tutorial-01
   ```

   Now [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) for the `tutorial-01` branch.
   - **Be sure to check off the box for the topic that you are working on in this pull request.**

   Note that several things will happen automatically to your new pull request. Each of these things models something that often happens in open source projects.
   1. A _label_ will be added to your pull request that categorizes the types of changes that you are proposing. In the case of this kit, those labels indicate the tutorials and extensions that you are working on.
   2. Your pull request will be automatically converted to a _draft pull request_. This status indicates to your instructor that you are still working. Later you'll mark your pull request as "ready for review" to turn in your work.

   </details>

### Working on the Tutorial Tasks

Use the following steps when working through a tutorial.

1. <details>
   <summary>Watch or read the tutorial all the way through once.</summary>

   The idea here is to get an overall picture of what language features are being used and what functionality they provide. Don't worry about catching all of the details on this first pass.

   </details>

2. <details>
   <summary>Restart the tutorial and build the artifact this time.</summary>

   For video tutorials, pause and rewind the video as frequently as necessary for you to follow along and add the code that is shown to your project.

   </details>

3. <details>
   <summary>Stage and commit the changes to your feature branch regularly.</summary>

   You should stage and commit the changes at each logical breaking point in the tutorial (e.g. after adding a new UI element, or after implementing a piece of functionality). You should have multiple commits for each tutorial.

   Running the commands below in the terminal are one way to stage and commit your changes.

   ```bash
   git stage .
   git commit -m "descriptive commit message"
   ```

   If you had a co-author or used AI in creating the content of the commit you will need to [add appropriate attribution commit trailers](./docs/AttributionTrailers.md), for example:

   ```bash
   git stage .
   git commit -m "-m "descriptive commit message" \
       --trailer "Assisted-by: GPT-3.3-Codex"
   ```

   </details>

4. <details>
   <summary>Ensure that the commit was successful.</summary>

   When making a commit, a number of checks are performed on the changes being committed. These checks ensure that the changes are properly formatted, use good style, and do not contain broken links or spelling errors.
   <br><br>
   **If any of the checks fail the commit will not be made.**
   <br><br>
   If the commit is not made, error information will be displayed in the terminal. Read the error messages that are displayed and try your commit again as described in step b.

   </details>

5. <div>
   Repeat steps 3-4 until you have completed the tutorial.
   </div>
6. <details>
   <summary>Push your feature branch to your fork (i.e. your origin).</summary>

   Running the commands below in the terminal are one way to do this.

   ```bash
   git push origin tutorial-01
   ```

   Pushing your feature branch to GitHub **automatically updates your pull request for the branch.**

   </details>

7. <details>
   <summary>Mark your pull request as "Ready for Review."</summary>

   Visit this page for instructions on how to [mark a pull request as ready for review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review).

   </details>

### Pausing your Work

When you want to pause your work you should:

1. <div>
   Stage and commit any changes to your feature branch.
   </div>
2. <div>
   Push your feature branch to your fork (i.e. your origin).
   </div>
3. <details>
   <summary>Stop your codespace.</summary>

   Visit this page for instructions on how to [Stop your Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace#stopping-a-codespace).

   </details>

### Restarting your Work

When you want to restart your work you should:

1. <div>
   Log into your GitHub account, if you are not already logged in.
   </div>
2. <details>
   <summary>Restart your codespace.</summary>

   Visit this page for instructions on how to [Restart your codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace#restarting-a-codespace).

3. <details>
   <summary>Wait for the codespace to become ready.</summary>

   When the codespace is ready the following message will appear in the terminal:

   ```bash
   *****************************************
   The Vue3 WebDev Kit is now ready for use.
   *****************************************
   ```

   </details>

### Completing an Extension

Create a new feature branch from the branch you used for the associated tutorial.
Make a pull request for your feature branch.
Complete the tasks in the extension making at least one commit for each task.
Push your feature branch to GitHub

7. <details>
   <summary>Request a Copilot Review of your Pull Request</summary>

8. [Request a pull request review by CoPilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review#using-copilot-code-review).
9. <details> 
   <summary>Address the comments in Copilot's pull request review.</summary>
   <details>

   You might address CoPilot's comments on your pull request by:
   - Making or adapting the change that CoPilot suggests and committing it to your feature branch.
   - Responding to CoPilot's comment indicating why you do not think the change is appropriate.
   - Ensure that all of CoPilot's comments have been marked as resolved.
   </details>

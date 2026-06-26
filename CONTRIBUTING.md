# Contributing to Vue3-WebDev-Kit

When working on assignments in the Vue3-WebDev-Kit you will be working in a style that is typical of a contributor to an open source project. Each assignment in the kit is given by a ticket in the issue tracker. You will solve the issue described in the ticket. These issues will have you build some artifacts as you follow along with a number of tutorials, and then extending them in some ways. You'll submit your final work by making a pull request for your feature branch. The "Contribution Workflow" below outlines a set of steps for completing an assignment.

## Contribution Workflow

Use the steps below to complete each assignment.

1. Visit the upstream repository using the URL that your instructor provided.
2. Find the ticket for the assignment you are working on in the Issue Tracker for the upstream repository.
3. [Log into your GitHub account](https://github.com/login), if you are not already logged in.
4. [Open your codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace#opening-an-existing-codespace-from-the-your-codespaces-page), if it is not already open.
5. Synchronize your `main` branch with the upstream `main` branch to get any changes merged by the maintainers since your last update. Running the commands below in the terminal in your codespace are one way to do this.
   ```bash
   git switch main
   git pull --ff-only upstream main
   ```
6. Create and switch to a new feature branch for the assignment.
   - Running the commands below in the terminal in your codespace are one way to do this. You'll need to change the `<branch-name>` placeholder to be descriptive of the assignment that you are working on (e.g. `assignment-01`).
     ```bash
     git switch main
     git branch <branch-name>
     git switch <branch-name>
     ```
7. Complete **a little bit of work** on the assignment.
   - Don't complete the entire assignment or even an entire lesson within the assignment. Instead, work until you have added a small bit of code that completes some functionality or feature that you can observe. Then go onto step 7.
8. Stage and commit your changes to your feature branch.
   - Running the commands below in the terminal are one way to do this.
     ```bash
     git stage .
     git commit -m "<descriptive commit message>"
     ```
   - If you had a co-author or used AI in creating the content of the commit you will need to [add appropriate attribution commit trailers](./docs/AttributionTrailers.md), for example:
     ```bash
     git stage .
     git commit -m "-m "<descriptive commit message>" \
         --trailer "Assisted-by: GPT-3.3-Codex"
     ```
9. Ensure that the commit was successful.
   - When making a commit, a number of checks are performed on the changes being committed. These checks ensure that the changes are properly formatted, use good style, and do not contain broken links or spelling errors.
   - If any of those checks fail the commit will fail.
   - If your commit fails, read the error messages that are displayed and try your commit again as described above in step 7.
10. Push your feature branch to your fork (i.e. your `origin`).
    - Running the commands below in the terminal are one way to do this.
    ```bash
    git push origin <branch-name>
    ```
11. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request) for your feature branch, **if you have not already created one**.
    - Be sure to complete the _Pull Request Template_ that is provided when you create the pull request. **It is essential that you update the "Closes #x"** line by replacing x with the number of the ticket for your assignment.
    - If you have already created a pull request it is automatically updated with any newly committed changes each time you push the feature branch.
    - Note that several things will happen automatically to your new pull request. Each of these models something that often happens in open source projects.
      - A collection of _labels_ will be added to your pull request that categorize the types of changes that you are proposing. In the case of this kit, those labels indicate the assignment, lessons and extensions that you are working on.
      - Your pull request will be automatically: converted to a _draft pull request_. This status indicates to the maintainers of a project that you are still working on the changes and they are not yet ready for a full review.
12. Repeat steps 7-10, making, committing and pushing additional changes until you have completed the assignment.
13. Merge any changes to the upstream `main` branch into your feature branch and resolve any conflicts. Running the commands below in the terminal in your codespace are one way to do this.
    ```bash
    git switch main
    git pull --ff-only upstream main
    git switch <branch-name>
    git merge main
    ```
14. [Request a pull request review by CoPilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review#using-copilot-code-review).
15. Address all of the comments that CoPilot made during its pull request review by:
    - Making or adapting the change that CoPilot suggests and committing it to your feature branch.
    - Responding to CoPilot's comment indicating why you do not think the change is appropriate.
    - Ensure that all of CoPilot's comments have been marked as resolved.
16. [Mark your pull request as ready for review](https://docs.github.com/en/enterprise-server@3.17/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review) to indicate that you have completed the assignment.

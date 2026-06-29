# Vue3-WebDev-Kit Quick Reference

## Workflow Steps

The following are the main activities that you will need to do when working on this kit. Each links takes you to the appropriate section of the `CONTRIBUTING.md`] file.

- [Starting a Tutorial](../CONTRIBUTING.md#starting-a-tutorial)
- [Working on Tutorial Tasks](../CONTRIBUTING.md#working-on-tutorial-tasks)
- [Completing a Tutorial](../CONTRIBUTING.md#completing-a-tutorial)
- [Pausing your Work](../CONTRIBUTING.md#pausing-your-work)
- [Resuming your Work](../CONTRIBUTING.md#resuming-your-work)
- [Starting an Extension](../CONTRIBUTING.md#starting-an-extension)
- [Working on Extension Tasks](../CONTRIBUTING.md#working-on-extension-tasks)
- [Completing an Extension](../CONTRIBUTING.md#completing-an-extension)

## Keyboard Shortcuts

### Visual Studio Code IDE

| Windows/Linux          | MacOS                | Action                     |
| ---------------------- | -------------------- | -------------------------- |
| `Ctrl + c`             | &#8984;`+ c`         | Copy                       |
| `Ctrl + v`             | &#8984;`+ v`         | Paste                      |
| `Ctrl + s`             | &#8984;`+ s`         | Save                       |
| `Ctrl + Z`             | &#8984;`+ z`         | Undo                       |
| `Ctrl + Y`             | &#8984;`+ Shift + Z` | Redo                       |
| `Ctrl + f`             | &#8984;`+ f`         | Find                       |
| `` Shift + Ctrl + ` `` | &#8984;`+ Shift + C` | Open a new terminal        |
| `Shift + Alt + F`      | `Shift + Option + F` | Auto format text/code      |
| `Alt + z`              | `Alt + z`            | Toggle word wrap in editor |
| `Ctrl + /`             | &#8984;`+ /`         | Toggle comment             |
| `Ctrl + b`             | &#8984;`+ b`         | Toggle EXPLORER side bar   |

### Browser

| Windows/Linux           | MacOS                     | Action                     |
| ----------------------- | ------------------------- | -------------------------- |
| `F12`                   | `F12`                     | Toggle the Developer Tools |
| `Ctrl + Shift + Delete` | &#8984;`+ Shift + Delete` | Clear browsing history.    |

## Git Commands

| Command                                                               | Action                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| `git status`                                                          | Display the current branch, modified, and staged files.         |
| `git switch main`                                                     | Switch to the `main` branch.                                    |
| `git pull --ff-only upstream main`<br>`git push origin main`          | Synchronize with the upstream `main` branch.                    |
| `git branch <branch_name>`                                            | Create a new branch named `<branch_name>`.                      |
| `git switch <branch_name>`                                            | Switch to the branch named `<branch_name>`.                     |
| `git stage <file_1>`                                                  | Stage the file identified by `<file_1>` for commit.             |
| `git stage .`                                                         | Stage all changed files for commit.                             |
| `git commit -m "<commit message>"`                                    | Commit the staged changes using the provided message.           |
| `git commit -m "..." \`<br>`  --trailer "..."`                        | Commit with an [attribution trailer](./AttributionTrailers.md). |
| `git commit --allow-empty \`<br>`  -m "..." \`<br>`  --trailer "..."` | Add a missing [attribution trailer](./AttributionTrailers.md).  |
| `git push origin <branch_name>`                                       | Push the branch named `<branch_name>` to your GitHub space.     |

## Miscellaneous

- [Coauthors Generator](https://coauthors.me/generator)

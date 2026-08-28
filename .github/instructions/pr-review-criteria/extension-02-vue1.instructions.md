---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Extension 02 - Vue1
---

- Read the pull request body.
- If the "Type of Work" is Extension and the "Topic" is "02 - Vue 1" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/first-website/index.html and web-projects/first-website/styles/style.css files checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Non-AI Extensions

- The "Reset" button will be visible at all times.
- The visibility of all elements on the page will be controlled by Vue's v-show directive instead of v-if.

## Extensions with AI

- There will be some introductory text at the top of the page that describes the flashword app.
- The `reset` method sets the `correct` `data` property to `null`.
- The `text` input has a placeholder attribute that describes what the user should enter in the input.
- A `label` element is correctly associated with the `text` input for accessibility.
- The `reset` method chooses a random word from the `words` array and sets `wordA` and `wordB` so that it is used for the next round of the game.

## AI Reflection

- The pull request has a comment that addressed each of the questions posed under the heading "AI Reflection" in the issue associated with the pull request.

- If you applied this criteria, skip all other path specific instructions.

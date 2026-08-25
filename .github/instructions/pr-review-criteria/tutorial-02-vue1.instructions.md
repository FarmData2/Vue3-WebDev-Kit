---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Tutorial 02 - Vue 1
---

- Read the pull request body.
- If the "Type of Work" is Tutorial and the "Topic" is "HTML/CSS/JS" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/first-website/index.html and web-projects/first-website/styles/style.css checking for the content in the following sections:

## Project Structure

- There is a directory named `flashword` within the `web-projects` directory.
- The `flashword` directory contains the files `index.html` and `app.js`.
- `index.html` loads vue.global.js from https://unpkg.com/vue@3/dist/vue.global.js.
- `index.html` loads `app.js` in a `<script>` tag.
- `app.js` disables an eslint rule with the line `// eslint-disable-next-line no-unused-vars, no-undef`

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## `index.html` Functionality

- data binding is used to display a word to be translated from the vue data.
- a text input is used to allow the user to enter a translation for the word.
- data binding is used to display the user's translation as it is typed.
- the value of the text input is bound to a vue data property.
- a "Check Answer" button uses an `on-click` directive to call a vue method that checks the translation.
- a `v-if` directive is used to display a feedback message after the "Check Answer" button is clicked.
- `v-if` and `v-else` directives are used to display correct or incorrect feedback messages.
- a "Reset" button uses an `on-click` directive to call a vue method that resets the input and feedback message.
- the `div` with the id `app` has the `v-cloak` directive.

## The `checkAnswer` method

- sets the correct flag in the vue data to true if the answer is correct, otherwise sets it to false.
- sets the show feedback flag in the vue data to true.

## The `reset` method`

- clears the user's answer in the vue data.
- sets the show feedback flag in the vue data to false.

- If you applied this criteria, skip all other path specific instructions.

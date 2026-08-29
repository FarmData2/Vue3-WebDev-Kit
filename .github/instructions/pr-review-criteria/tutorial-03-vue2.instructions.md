---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Tutorial 03 - Vue 2
---

- Read the pull request body.
- If the "Type of Work" is Tutorial and the "Topic" is "01 - HTML/CSS/JS" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/flashword/index.html and web-projects/flashword/app.js checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Event Handling

- The `text` input has a `v-on` directive that attaches a `keyup` event handler for the enter key that calls the method that checks the answer.

## Attribute Binding

- The `img` element uses `v-bind` to bind the `src` and `alt` attributes to vue data properties.
- The `checkAnswer` method changes the vue data properties bound to the `src` and `alt` attributes that change the image and alt text that are displayed when the answer is correct or incorrect.
- The `text` input uses `v-bind` to bind its `style` attribute to an object literal that sets the background color.

## Form Input Binding

- The page contains 3 `radio` inputs for different difficulty levels. All 3 use the `v-model` directive to bind the selected value to the same vue data property.
- The page contains a `select` input for different difficulty levels. It uses the `v-model` directive to bind the selected value to a vue data property.
- The page contains a `textarea` input asking the user to use the word in a sentence. It uses the `v-model` directive to bind the input value to a vue data property.

## Computed Properties and Watchers

- The page contains `text` inputs for first and last names.
- The app has a computed property that returns the full name by concatenating the first and last names.
- The app has a watcher that watches the first name and updates a vue data property with the full name whenever it changes.
- The app has a watcher that watches the last name and updates a vue data property with the full name whenever it changes.
- The app has a computed property that returns a list of spanish words with <= 3 characters.

- If you applied this criteria, skip all other path specific instructions.

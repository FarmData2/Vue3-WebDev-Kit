---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Tutorial 04 - Vue 3
---

- Read the pull request body.
- If the "Type of Work" is Tutorial and the "Topic" is "04 - Vue3" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Allow for small variances in variable, attribute and method names.
- Review web-projects/flashword/index.html, web-projects/flashword/app.js and web-projects/flashword-vite/src/App.vue checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Building FlashWord

- The `web-projects/flashword/index.html` file contains a `<div>` for displaying each word.
- The `web-projects/flashword/app.js` file contains an array `words` with elements for `hola`, `uno`, and `gris`.
- The `web-projects/flashword/app.js` file contains `computed` properties `shuffledWords` and `wordCount`.
- The `web-projects/flashword/app.js` file contains a `watch` for the `correctCount` property.
- The `web-projects/flashword/app.js` file contains the `checkAnswer` `method`.

## Installing Vite

- The `web-projects/flashword-vite` directory exists.
- The `web-projects/flashword-vite` directory contains `package.json` file with dependencies of Vue and Vite.
- The `web-projects/flashword-vite` directory contains a `vite.config.js` file.

## Working with Vite and Vue

- The `<script>` element in `web-projects/flashword-vite/src/App.vue` contains approximately the content from `web-projects/flashword/index.html`.
- The `<template>` element in `web-projects/flashword-vite/src/App.vue` contains approximately the content from `web-projects/flashword/index.html`.
- The `<style>` element in `web-projects/flashword-vite/src/App.vue` contains approximately the content from `web-projects/flashword/style.css`.

- If you applied this criteria, skip all other path specific instructions.

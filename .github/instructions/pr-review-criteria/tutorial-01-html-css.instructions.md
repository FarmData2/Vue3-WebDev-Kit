---
applyTo: 'web-projects/first-website/index.html, web-projects/first-website/styles/style.css'
description: 'Review criteria for Tutorial 01 - HTML/CSS/JS'
---

- Read the pull request body.
- If the "Type of Work" is Tutorial and the "Topic" is "HTML/CSS/JS" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/first-website/index.html and web-projects/first-website/styles/style.css checking for the content in the following sections:

## Project Structure

- There is a directory named `first-website` within the `web-projects` directory.
- The `first-website` directory contains `index.html`
- The `first-website` directory contains a subdirectory named `styles` which contains `style.css`.
- The `first-website` directory contains a subdirectory named `images` which contains at least one image file.
- The `first-website` directory contains a subdirectory named `scripts` which contains `main.js`.
- `index.html` loads the `styles/style.css` file in a `<link>` tag in the `<head>`.
- `index.html` loads the `scripts/main.js` file in a `<script>` tag in the `<head>`.

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Basic HTML Structure

The `index.html` file contains the following elements:

- a descriptive title in the head.
- an h1 element with the same or very similar title.
- the styles/style.css file is linked in the head.
- the head links to a font from Google Fonts.
- an img element that displays an image and has descriptive alt text.
- one or more p elements below the image.
- an unordered list or ordered list element with at least 3 list items.
- at least one link element.

## CSS Styling

The `styles/style.css` file contains type selectors for `<h1>`, `<p>`, `<li>`, `<body>`, `<img>` and `<html>` elements.

## JavaScript Functionality

The `main.js` file contains:

- assigns a click event listener to the image that toggles the displayed image between two images.
- assigns a click event listener to the button calls the `setUsername` function.
- contains code that runs on page load that checks if a username is stored in local storage and displays it in the `<h1>` element if it exists.

- If you applied this criteria, skip all other path specific instructions.

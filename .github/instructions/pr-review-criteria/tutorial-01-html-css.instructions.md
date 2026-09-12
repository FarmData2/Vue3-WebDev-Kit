---
applyTo: 'web-projects/first-website/index.html, web-projects/first-website/styles/style.css'
description: 'Review criteria for Tutorial 01 - HTML/CSS/JS'
---

- Read the pull request body.
- If the "Type of Work" is Tutorial and the "Topic" is "01 - HTML/CSS/JS" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/first-website/index.html and web-projects/first-website/styles/style.css checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages are generally descriptive of the changes made in the commit.

## Project Structure

- There is a directory named `first-website` within the `web-projects` directory.
- The `first-website` directory contains an html file.
  - The html file is named `index.html`.
- The `first-website` directory contains a subdirectory with a file that contains some css styles.
  - The subdirectory is named `styles`.
  - The style sheet is named `style.css`.
- The `first-website` directory contains a subdirectory containing at least one image file.
  - the subdirectory is named `images`.
- The `first-website` directory contains a subdirectory with a file that contains some Javascript code.
  - The subdirectory is named `scripts`.
  - The Javascript file is named `main.js`.

## Planning a Website

- The pull request contains a comment that describes the purpose of the website including a color, an image or a link to an image, and a font.

## Basic HTML Structure

The `index.html` file contains the following elements:

- the `<head>` contains a descriptive `<title>`.
- the `<head>` contains a `<link>` element that links in a css style sheet.
- the head contains a `<script>` element that loads a javascript file.
- the head links to a font from Google Fonts.
- the `<body>` contains an `<h1>` element with content similar to the `<title>`.
- the `<body>` contains at least one `<img>` element that displays an image and has descriptive `alt` text.
- the `<body>` contains one or more `<p>` elements.
- the `<body>` contains a `<ul>` or `<ol>` element with at least 3 list items.
- the `<body>` contains at least one link in an `<a href>` element.

## CSS Styling

The style sheet linked in the `<head>` contains type selectors for `<h1>`, `<p>`, `<li>`, `<body>`, `<img>` and `<html>` elements.

## JavaScript Functionality

The included JavaScript file:

- assigns a click event listener to the image that toggles the displayed image between two images.
- assigns a click event listener to the button calls a function that sets the username.
  - the function is named `setUsername`.
- contains code that runs on page load that checks if a username is stored in local storage and displays it in the `<h1>` element if it exists.

- If you applied this criteria, skip all other path specific instructions.

---
applyTo: 'web-projects/first-website/index.html, web-projects/first-website/styles/style.css'
description: Review Criteria for Extension 01 - HTML/CSS/JS
---

- Read the pull request body.
- If the "Type of Work" is Extension and the "Topic" is "01 - HTML/CSS/JS" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/first-website/index.html and web-projects/first-website/styles/style.css files checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## HTML Form Elements

- An `input` element of type `text` for a nickname.
  - The length of the input should be between 5 and 10 characters inclusive.
- An `input` element of type `date` for an assignment due date.
  - The minimum date should be the first of the current month.
  - The maximum date should be last day of the current month.
  - The default date should be a valid date within that range.
- A `select` element.
  - The `select` element should have at least 3 options.
- One of the following elements: `<meter>`, `<progress>`, or `<textarea>`.

## HTML Tables

- A `<table>` element.
  - The `<table>` should have at least 4 rows.
  - The `<table>` should have at least 3 columns.
- A `<th>` element for each column in the first row of the table.

## CSS Styling

- The `<table>`, `<th>` and `<td>` elements have a border styling applied to them.
- The `<th>` elements are styled by a rule with a type selector.
- Even rows of the table are styled by a rule with class selector.
- Odd rows of the table are styled by a different rule with an class selector.
- A `<span>` element is styled using class selector.
  - The class selector used should be one that was also used for a table row.
- At least one cell in the table is styled using an id selector.

- If you applied this criteria, skip all other path specific instructions.

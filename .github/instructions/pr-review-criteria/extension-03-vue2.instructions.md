---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Extension 03 - Vue2
---

- Read the pull request body.
- If the "Type of Work" is Extension and the "Topic" is "03 - Vue 2" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/flashword/index.html and web-projects/flashword/app.js checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Non-AI Extensions

- The "Reset" button is disabled whenever the `text` input is empty.
- There are 2 CSS rules in `index.html` that set the background-color to different colors.
- There is a Vue `computed` property that returns the name of the CSS class to be applied to the `text` input based on the value of `hasError`.
- The `text` input is styled by binding a CSS `class` to a Vue `computed` property.

## Extensions with AI

- A `watch` on `answer` clears the error styling on the `text` input when the user starts typing an answer.
- The flashword app contains a badge feature that displays the image of a badge when the percent of a user's answers that are correct is at least 80 percent.
- At least one of the commits in the pull request contains an `Assisted-by:` trailer acknowledging the use of an AI model or tool as required by the workflow.
- The pull request has at least one comment containing a log of the author's interaction with GitHub Copilot as required by the workflow. This comment can be identified because it contains a top level heading of "Copilot Chat Log" and a hash hidden in an HTML comment.

## AI Reflection

- The pull request has a comment that responds to each of the questions posed under the heading "AI Reflection" in the issue associated with the pull request. Responses that simply restate or rephrase the question should not be counted.

- If you applied this criteria, skip all other path specific instructions.

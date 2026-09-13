---
applyTo: 'web-projects/flashword/**/*'
description: Review Criteria for Extension 04 - Vue3
---

- Read the pull request body.
- If the "Type of Work" is Extension and the "Topic" is "04 - Vue 3" then apply the criterion below for this review. Otherwise do not apply this criteria in your review.
- Review web-projects/flashword/index.html and web-projects/flashword/app.js checking for the content in the following sections:

## Workflow

- The pull request contains at least three commits.
- The commit messages briefly describe the changes made in the commit.

## Non-AI Extensions

- The hint associated with each word can be shown by checking a checkbox for the word.
  - The hint should be hidden when the checkbox is unchecked.
  - The hint should be hidden using `v-show`
- The checkbox and hint are both hidden when the answer is correct.
  - The checkbox and the hint should be contained in a `<div>`
  - The `div` should be hidden using `v-show`.

## Extensions with AI

- There is a computed property that returns the number of words that are correct.
  - The computed property should be named `correctCount`.
  - The computed property should compute its answer based on the `correct` property of the entries in `data.words`,
  - There should not be a `data` property named `correctCount`.
  - The `checkAnswer` method should not modify `correctCount`.

## Optional Extensions

- The page contains a Reset button that resets the game to its initial state.
  - The reset button should call a `method` that does the work of resetting the state.
  - The `answer`, `correct`, `showHint`, and possibly another property should be reset in the method.
- There is a computed property that returns true if all of the words are correct.
  - The computed property should be named `completed`.
  - The computed property should compare the `wordCount` and `correctCount` computed properties to determine if all words are correct.
  - There should not be a `data` property named `completed`.
  - There should not be a `watch` for the `correctCount` property.
- The words are styled to indicate when an incorrect answer has been entered.
  - There should be a style with a class selector in the `style` section that is used to indicate the incorrect answer.
  - The style should be applied to the same `<div>` that the `.correct` style is applied to.

## AI Reflection

- The pull request has a comment that responds to each of the questions posed under the heading "AI Reflection" in the issue associated with the pull request. Responses must contain more than a restatement of the question in order to satisfy this criteria.

- If you applied this criteria, skip all other path specific instructions.

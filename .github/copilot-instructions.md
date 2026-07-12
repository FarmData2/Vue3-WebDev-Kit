## Copilot Pull Request Reviews

- When reviewing a pull request read the body of the pull request and identify the "Type of Work" and the "Topic".
- If no "Type of Work" or "Topic" is checked in the task list or more than one "Type of Work" or more than one "Topic" is checked, leave a comment on the pull request asking the author to check exactly one "Type of Work" and exactly one "Topic" and do not perform a review.
- Use the custom instructions file in the `.github/instructions/pr-review-criteria` directory that matches the "Type of Work" and "Topic" as the instructions for the review.
- Use only the criteria in the custom instructions when performing the review. Do not use any other criteria.
- Generate the results of the review in a table with columns for "Requirement", "Status", and "Evidence."
- Use the characters ✅ for "Status" if the requirement is met and ❌ if the requirement is not met.
- Write the table of results into a comment on the pull request.

## Copilot Pull Request Reviews

- You are only to perform a pull request review. Do not make any changes to the code in the pull request. Do not add any commits to the pull request.
- If there are new commits since the last review, you must perform a new review. Do not rely on your previous review.
- When reviewing a pull request read the body of the pull request and identify the "Type of Work" and the "Topic".
- If no "Type of Work" or "Topic" is checked in the task list or more than one "Type of Work" or more than one "Topic" is checked, leave a comment on the pull request asking the author to check exactly one "Type of Work" and exactly one "Topic" and do not perform the review.
- Use the custom instructions file in the `.github/instructions/pr-review-criteria` directory that matches the "Type of Work" and "Topic" as the instructions for the review.
- Use only the criteria in the custom instructions when performing the review. Do not use any other criteria.
- Generate the results of the review using one table for each level 2 heading in the custom instructions.
- Prefix each table with the level 2 heading text from the custom instructions.
- Make the columns the same width in all of the tables so that they align properly.
- Use the characters ✅ for "Status" if the requirement is met and ❌ if the requirement is not met.
- Write the table of results into a comment on the pull request.

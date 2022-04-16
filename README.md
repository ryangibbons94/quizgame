# Quiz Game
A web app that fetches trivia questions from an API and returns them to the user. It keeps track of their score using local storage and will give an endless number of questions upon request.

**Link to project:** https://random-quizz.netlify.app/

![screenshot of website](https://i.imgur.com/mSvbSi0.jpeg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

**API Referenced in APP:** https://opentdb.com/

## Challenges Faced/Lessons Learned:

1. Randomizing Answer Choices:

The API gives the correct answer and incorrect answers separately so I had to concatenate the incorrect array of incorrect answers with the correct answer. Then I had to use a function to shuffle that array because I did not want the correct answer to always be answer choice D. 

2. Preventing Multiple Correct Answer Clicks:

The way I set up the scoring system in the app involved incrementing or decrementing the score each time a user clicked the correct, or incorrect answer. The problem was that the user could just spam click the correct answer after they knew it was correct and it would still give them points. To prevent this I added an invisible div over the answer choices that I set to display after a user selects an answer. 

3. Allowing Selection of both Category and Difficulty:

This was tricky to set up because it involved adding query parameters based on if the user selects an option in each of these sections or if they selected 'random'. The randomization was different for each option as well. For the category option, I used an if statement that got rid of the choice query parameter(the API defaults to random if a choice is not given). For the difficulty randomization I set up this array: ["easy", "medium", "hard"] and used Math.floor and Math.random to give a random value from that array for the difficulty parameter.

4. Checking Answers with Special Characters:

If the text returned by the API contained special characters they would be written with the HTML character code, for instance, if there was a plus sign in the text, it would say "& plus;" rather than "+" which was a problem because to check the answer I compared the innerHTML of the answer choice selected to the value of the correct answer provided by the API. They would not match up because "& plus;" is not the EXACT SAME thing as "+". To get around this I created an invisible span and displayed the correct answer there. Then the "& plus;" would be converted to "+" and when comparing "+" to "+", they are an exact match.

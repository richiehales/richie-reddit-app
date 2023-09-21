# Richie Reddit App

## Contents
[Website Link](#website-link)<br>
[Wireframe](#wireframe)<br>
[Technologies](#technologies)<br>
[About](#about)<br>
[Installation](#installation)<br>
[Current Step](#current-step)<br>
[Lighthouse Report](#lighthouse-report)<br>
[Testing](#testing)<br>
[Test Results](#test-results)<br>
[Future Additions](#future-additions)<br>
[Last Push](#last-push)<br>

## Website Link
https://richie-reddit-app.netlify.app

## Wireframe
![image info](./images/postspage.jpg)

## Technologies
1. HTML.
2. CSS.
3. React.
4. Redux.

## About
This project is a simplified version of the Reddit website.<br>
A list of subreddits is requested from the Reddit API and mapped to buttons on the LHS of main page.<br>When a subreddit button is clicked the relevent posts are requested from the reddit API. These posts<br>are mapped and displayed on the RHS of the screen along with a comments button. If the comments<br>is clicked the relevent comments for that post is requested from the Reddit API. The comments buton also links to the comment component using react-router-dom.<br>
<br>
There is a search bar in the header component that can be used to search the reddit API and return relevent posts.<br>
<br>
I built this project as the final portfolio project in the Codecademy full stack carreer path course.

## Installation
1. git clone https://github.com/richiehales/richie-reddit-app.git
2. npm install
3. npm i react-router-dom
4. npm install redux-mock-store --save-dev

## Current Step
1. Add loader spinner.
      
## Lighthouse Report
![image info](./images/lighthouse.jpg)

## Testing
![image info](./images/testingOverview.jpg)

## Test Results
![image info](./images/testingResults.jpg)

## Future Additions
1. Display comments under relevent post
2. Display replies underneath comments

## Last Push
Home Thursday 18:00

[Contents](#contents)<br>


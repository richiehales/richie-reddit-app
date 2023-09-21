# Richie Reddit App

<h2 id="contents" align="center">Contents</h2>
[About](#about)<br>
[Installation](#installation)<br>
[Wireframe](#wireframe)<br>
[Current Step](#current-step)<br>
[Future Additions](#future-additions)<br>
[Lighthouse Report](#lighthouse-report)<br>
[Testing](#testing)<br>
[Testing Results](#testing-results)<br>
[Last Push](#last-push)<br>

<h2 id="about" align="center">About</h2>
This project is a simplified version of the Reddit website.<br>
A list of subreddits is requested from the Reddit API and mapped to buttons on the LHS of main page.<br>When a subreddit button is clicked the relevent posts are requested from the reddit API. These posts<br>are mapped and displayed on the RHS of the screen along with a comments button. If the comments<br>is clicked the relevent comments for that post is requested from the Reddit API. The comments buton also links to the comment component using react-router-dom.<br>
<br>
There is a search bar in the header component that can be used to search the reddit API and return relevent posts.<br>
<br>
I built this project as the final portfolio project in the Codecademy full stack carreer path course.

<h2 id="installation" align="center">Installation</h2>
1. git clone https://github.com/richiehales/richie-reddit-app.git<br>
2. npm install<br>
3. npm i react-router-dom<br>
4. npm install redux-mock-store --save-dev

<h2 id="wireframe" align="center">Wireframe</h2>
![image info](./images/postspage.jpg)

<h2 id="current-step" align="center">Current Step</h2>
1. Finalise README
      
<h2 id="future-additions" align="center">Future Additions</h2>
1. Display comments under relevent post<br>
2. Display replies underneath comments

<h2 id="lighthouse-report" align="center">Lighthouse Report</h2>
![image info](./images/lighthouse.jpg)

<h2 id="testing" align="center">Testing</h2>
![image info](./images/testingOverview.jpg)

<h2 id="testing-results" align="center">Testing Results</h2>
![image info](./images/testingResults.jpg)

<h2 id="last-push" align="center">Last Push</h2>
Home Thursday 18:00


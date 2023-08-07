# Redux Tutorial
https://redux.js.org/tutorials/essentials/part-2-app-structure

## Current Step (todo)
### Add 'time ago' - {moment.unix(post.created_utc).fromNow()}

### Remove .self_text - ???

### Add Comments
1. Create Comments slice in store with comments: []: & permalink: ""
2. Set to empty array - nothing displayed until comments button clicked
3. Update permalink in comments slice with url from permalink in posts when display comments button is clicked
4. Fetch url (permalink url) from reddit.
5. map .data.children.body and return return json[1] (second array returned)
6. For item 5 - return json[1].data.children.map((subreddit) => subreddit.data);

### Console error
1. Cross-Origin Read Blocking (CORB) blocked cross-origin response <URL> with MIME type text/html. See <URL> for more details.

## Github
### Push - 
1. git add .
2. git commit -m "description"
3. git push -u origin main

### Pull -
1. git pull

### Initial Git Pull/Add (Could clone)
1. git init
2. git add .
3. git commit -m "first commit"
4. git branch -M main
5. git remote add origin https://github.com/richiehales/richie-reddit-app.git
6. git push -u origin main

### Git Clone
1. git clone https://github.com/richiehales/richie-reddit-app.git

## Last Push
Home Monday 19:30


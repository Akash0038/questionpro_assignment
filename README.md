## QuestionPro Assignment

### Problem Statement:

Use the Hacker News API available at the Link to build the API backend for the users.

Users should be able to do the following:

1. /top-stories - Should return the top 10 stories ranked by the score in the last 15 minutes (Read Instructions), Each story should have a title, URL, score, time of submission, and the user who submitted it.

2. /past-stories - Should return all the stories that were served previously from the 1st endpoint (/top-stories).

3. /comments - Should return 10 comments (max) on a given story sorted by a total number of child comments. Each comment should contain comment text, the user’s hacker news handle.

### Instructions:

1. To prevent overloading the Hacker News APIs and getting blocked from Hacker News firebase, Implement appropriate caching so that the clients fetching your data will see the same cached data for up to 15 mins.

2. You are free to use any database.

3. Your solution will be evaluated for its code quality, test coverage, architecture, and performance.

4. Brownie points for setting up your project to run inside Docker

### Tech Used:
1. Backend : Python ( FastApi framework )
2. Database : SQLite + SQLAlchemy ORM
3. Caching : Redis
4. Frontend : React JS
5. UI library : Semantic UI React
6. Front end build tool : Vite

### Running Application using Docker:
1. Install docker-compose plugin : https://docs.docker.com/compose/install/linux/
2. Replace context paths in docker-compose.yml with your local repo paths for backend and frontend repos
3. Build using docker compose : `docker compose build`
4. Run using docker compose : `docker compose up -d`
5. App will be running on :: http://localhost:5173/

For Running Backend or Frontend separately or without docker , please refer README.md files in backend and frontend respectively
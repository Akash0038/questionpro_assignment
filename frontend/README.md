## Questionpro assignment frontend

Node version used : v16.14.0
### Local setup without docker
1. Install npm packages : `npm i`
2. Run : `npm run dev` to start locally , app will be running on  http://127.0.0.1:5173

### Docker setup
1. Create a Dockerfile with node base image and to run the app in container
2. Build the docker image of frontend application: `docker build -t questionpro-frontend .`
3. Run the frontend application container: `docker run --network host -itd questionpro-frontend:latest`, app will be running on  http://127.0.0.1:5173
4. To stop the resources, we can stop the all containers using `docker stop <container-id> command`
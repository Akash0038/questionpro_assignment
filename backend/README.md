## Questionpro assignment backend
Python version used : 3.8.10
### For local setup without docker
1. Install virtualenv if not present : `pip install virtualenv`
2. Run `virtualenv venv` in project folder
3. Run `source venv/bin/activate` in project folder
4. Install requirements using : `pip install -r requirements.txt`
5. Complete the redis setup
6. Run server using : `uvicorn main:app --port 5000` , server will be running on  http://127.0.0.1:5000
### Redis setup for running without docker
1. Follow the instructions on the following page to install Redis on Linux:https://redis.io/docs/getting-started/installation/install-redis-on-linux/
2. Run the redis-server command:`redis-server`
3. Verify if the server is started using the redis-cli command:`redis-cli ping`
If the server is running, the above command should return PONG.
### Docker setup
1. Create setup.py file in project directory and mention details about project as required
2. Create a Dockerfile with python base image and to run the python server in container
3. Run the redis-server in a docker container: `docker run -d --name redis-server --network host redis`
4. Build the docker image of backend application: `docker image build -t questionpro-backend .`
5. Run the backend application container: `docker run --network host -itd questionpro-backend:latest` , server will be running on  http://127.0.0.1:5000
6. To stop the resources, we can stop the all containers using `docker stop <container-id>` command


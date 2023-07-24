# Users Post

to load the application please follow the steps:

# step 1

- clone the repository and install the node modules for the client and for the server.

# step 2

- setup the database container using Docker.
- run: "docker build -t mysql_db ."
- run: "docker run -p 3306:3306 mysql_db"
- test the container is up and running: "docker ps" - see the container with the name you have given

# step 3

- start the development server by navigating to the server dir and running: "npm run dev"
- you should see a log message of a success

# step 4

- start the development client by navigating to the client dir and running: "npm run dev"
- you should see a users table
- navigate to the users post by clicking any row on the table
- on the posts page, you can filter the posts by entering some text in the search box

Enjoy :)

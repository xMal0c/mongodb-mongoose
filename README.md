### MongoDB / Mongoose

This projectfile establishes a connection to a MongoDB database,
creates a new user, and then creates a new blog post associated with that user.

It uses Mongoose for object modeling and interaction with MongoDB.

Fork / download and run `npm install`.
Requiers for ex. Docker -> mongo. Listens to 27017 port.
EXAMPLE: Run in terminal `docker run -d -p 27017:27017 --name MONGO_CONTAINER mongo:latest`

Run `npm run dev`
Uncomment lines in index.js to view different methods.

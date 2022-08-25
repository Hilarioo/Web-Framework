// Notes

Model Classes: Handle data, used to represent Users, Blog Posts, Images, etc
View Classes: Handle HTML and events caused by the user (like clicks)

// Start
yarn start uses concurrently to run both the API and UI simultaneously, eliminating the need for two seperate terminals
UI --> yarn parcel index.html
API --> yarn json-server -w db.json

// RESTful conventions
GET --> /posts --> Retrieve all posts
GET --> /posts/:id --> Retrieve post with the specified id
POST --> /posts --> Create a new post
PUT --> /posts/:id --> Update a post
DELETE --> /posts/:id --> Delete a post

# 200414 Mongo CRUD Lecture
[Resource - MDN Mongo Info](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Connecting_to_MongoDB) |
[Resource - Mongoose Methods](https://mongoosejs.com/docs/api/model.html)
### Set up
- Create five endpoints in a routes module mounted to the `api` path
    - Read all entries - display `Get all method worked`
    - Read entry by title - display `Get by title method worked`
    - Create an entry - display `Post method worked`
    - Update an entry - display `Put method worked`
    - Delete an entry - display `Delete method worked`
- Create, test, and save all endpoints in Postman

### Define Schema
- Install `mongoose` via the terminal
- Create a file called `EntrySchema` in a `models` directory
- Reference `mongoose` using require as `mongoose`
- Reference the `Schema` class from mongoose as `Schema`
- Define a `EntrySchema` using these properties and types
```JavaScript
{
    entryTitle : String,
    entryAuthor : String,
    entryReadTime : Number,
}
```
- export the `EntrySchema` and name the collection `entry200414`

### Using Mongoose
- Connect to your Mongo Database and set up error message in your entry point file using the code snippet below
```JavaScript
// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = '[YOUR-CONNECTION-STRING]'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
- Reference your schema using `require()` as EntryCollection in your routes module
### CRUD Operations
For each endpoint you will need to :
- Comment out the initial test message
- Display errors if there are any
- If there are no errors display results
- Test endpoints in postman 
#### Create An Entry
- Use the `create()` mongoose method to create a new entry at the correct endpoint
- View in Mongoose

#### Read An Entry
- Use the `findOne()` mongoose method to find an entry by title at the correct endpoint

#### Read Multiple Entries
- Use the `find()` mongoose method to display all entries at the correct endpoint

#### Update an Entry
- Use the `findOneAndUpdate()` mongoose method to find an entry by title and update it at the correct endpoint

#### Delete an Entry
- Use the `findOneAndDelete()` mongoose method to find an entry by title and delete it at the correct endpoint
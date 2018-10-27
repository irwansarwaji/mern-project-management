const express = require('express');
const mongoose = require('mongoose'); //ORM to connect with our mongodb

//To take requests and get data from the body -> when post request is send, we want to get the name of that post from the request
const bodyParser = require('body-parser');
const path = require ('path');
//to make items.js work
const items = require('./routes/api/items');
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch ( err => console.log(err));

//Use Routes refers to items variable.. which is the file
app.use('/api/items', items);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`)); // let the app listen on the port

const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var contact = require('./routes/contact'); 


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/contacts_db';  //we need to change dev db url
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', contact);

var port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

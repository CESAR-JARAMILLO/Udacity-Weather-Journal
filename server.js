// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`Running server on port ${port}`);
}

// Initialize all route with a callback function
app.get('/all', callback);

// Callback function to complete GET '/all'
function callback(req, res) {
    res.send(projectData);
}

// Post Route
app.post('/add', addData);

function addData(req, res) {
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['content'] = req.body.content;

    res.send(projectData);
}
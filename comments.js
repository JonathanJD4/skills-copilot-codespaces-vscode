// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add CORS policy
app.use(require('cors')());

// Add routes
app.use(require('./routes'));

// Start web server
app.listen(3000, () => {
    console.log('Server started at port 3000');
});
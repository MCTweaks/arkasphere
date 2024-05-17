const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"))

app.use(bodyParser.json());


// The Proprietary module is not required.
try {
    const proprietary = require('./net.hetmastertje/Main.js');
    proprietary(app);
} catch (error) {
    console.error("Error loading proprietary module:", error);
    // Handle the error gracefully, or just continue without it.
}

// Routes Import


// Routes Declaration


module.exports = { app };
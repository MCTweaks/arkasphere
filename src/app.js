const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"))


// Import the proprietary module
const proprietary = require('./proprietary/proprietary.js');
proprietary(app);

// Routes Import


// Routes Declaration


module.exports = { app };
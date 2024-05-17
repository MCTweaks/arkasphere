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
    const netHetMasterTje = require('./net.hetmastertje/Main.js');
    const comArkaSphere = require('./com.arkasphere/Main.js');
    netHetMasterTje(app);
    comArkaSphere(app);
} catch (error) {
    console.error("Error loading modules:", error);
    // Handle the error gracefully, or just continue without it.
}

// Routes Import


// Routes Declaration


module.exports = { app };
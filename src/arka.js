const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const { app } = require('./app.js');
const port = 3000 || process.env.PORT;


const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'arkasphere',
    password: '',
    database: 'arkasphere',
});

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to Mysql")
    }
});


app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404 page not found</h1>')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
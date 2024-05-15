const mysql = require("mysql");

const database = () => {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'arkasphere',
        password: '',
        database: 'arkasphere',
    });

    return new Promise((resolve, reject) => {
        db.connect((error) => {
            if (error) {
                console.log(error);
                reject(error); // Reject the promise if there's an error
            } else {
                console.log("Connected to MySQL");
                resolve(); // Resolve the promise if connection is successful
            }
        });
    });
};

module.exports = database;

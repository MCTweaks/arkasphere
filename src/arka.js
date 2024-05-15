const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const port = 3000 || process.env.PORT;

// Try to load Database
try {
    const database = require('./database.js');
    database().then(() => {
        const { app } = require('./app.js');

        app.use((req, res) => {
            res.status(404);
            res.send('<h1>Error 404 page not found</h1>')
        });

        app.listen(port, () => {
            console.log(`App is listening on port ${port}`);


        });
    });
} catch (error) {
    console.error("Error loading database module: ", error);
    // Handle the error gracefully, or just continue without it.
}

// Make sure APP loads after database

const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const { app } = require('./app.js');


const port = 3000 || process.env.PORT;

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404 page not found</h1>')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
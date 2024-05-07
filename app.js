const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Ustawienie silnika widoku EJS
app.set('view engine', 'ejs');

// Ścieżka do folderu z widokami
app.set('views', './views');

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
app.use('/css', express.static(path.join(__dirname, '/css')));

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

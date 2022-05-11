const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configure template Engine and Main Template File
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
// Setting template Engine
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
    res.render('home-base');
});
app.get('/about-us', (req, res) => {
    res.render('about-us');
});
app.get('/home-base', (req, res) => {
    res.render('home-base');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
// port where app is served
app.listen(3001, () => {
    console.log('The web server has started on port 3000');
});
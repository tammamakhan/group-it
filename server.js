const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));

// Setting template Engine
app.set('view engine', 'handlebars');

app.get('/main', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/create-event', (req, res) => {
    res.render('create-event');
});

app.listen(3001, () => {
    console.log('server on port 3001');
});
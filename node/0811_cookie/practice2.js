const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(
    session({
        secret: 'mySessionSecret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            maxAge: 60 * 1000
        }
    })
);

app.get('/', (req, res) => {
    res.redirect('/name');
});

app.get('/name', (req, res) => {
    if (req.session.name) {
        res.render('practice2', { name: req.session.name });
    } else {
        res.render('login');
    }
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    req.session.name = '류승기';
    res.redirect('/name');
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/name');
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

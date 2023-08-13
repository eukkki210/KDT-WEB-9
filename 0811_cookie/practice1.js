const cookieparser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// cookie-parser
app.use(cookieparser());

app.get('/', (req, res) => {
    res.render('practice1');
});

app.get('/setCookie', (req, res) => {
    res.cookie('hideNotification', 'true', {
        httpOnly: true,
        maxAge: 60 * 1000, // 1분
    });
    res.send('set cookie');
});

app.get('/clearCookie', (req, res) => {
    res.clearCookie('hideNotification');
    res.send("clear cookie");
});

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

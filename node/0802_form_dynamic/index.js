const express = require('express');
const app = express();
const PORT = 8000;
const myid = "eukkki210";
const mypw = 1234;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('index');
});

// ajax
app.get('/ajax', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// axios
app.get('/axios', (req, res) => {
    console.log(('back', req.query));
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log(('back', req.body));
    res.send(req.body);
});

// fetch
app.get('/fetch', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) => {
    console.log('back', req.body);
    res.send({ result: true, data: req.body });
})

// 실습
app.get('/practice1', (req, res) => {
    res.render('practice1', {
        title: "axios get 회원가입",
    });
})

app.get('/practice2', (req, res) => {
    res.render('practice2', {
        title: "axios post 회원가입",
    });
})

app.post('/axiosPractice', (req, res) => {
    console.log(('back', req.body));
    const userId = req.body.id;
    const userPw = req.body.pw;
    if ((userId == myid) && (userPw == mypw)) {
        res.send({ result: true });
    } else {
        res.send({ result: false });
    }
})

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
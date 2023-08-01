const e = require('express');
const express = require('express');
const { userInfo } = require('os');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    // console.log(req.body);
    // res.send('hello');
    res.render('index', { title: '폼 전송 실습' });
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
});

app.get('/getInfo', (req, res) => {
    console.log(req.query);
    res.render('practice1', {
        title: "get으로 정보받기",
    });
});

app.get('/getResult', (req, res) => {
    console.log(req.query);
    res.render('practice1Result', {
        title: "get요청 폼 결과 확인하기",
        info: req.query
    });
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', {
        title: "POST요청 폼 결과 확인하기",
        userInfo: req.body
    })
});

app.get('/postInfo', (req, res) => {
    console.log(req.query);
    res.render('practice2', {
        title: "post로 정보받기",
    });
});

app.get('/postResult', (req, res) => {
    console.log(req.query);
    res.render('practice2Result', {
        title: "post요청 폼 결과 확인하기",
        info: req.query
    });
});

// 서버오픈
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
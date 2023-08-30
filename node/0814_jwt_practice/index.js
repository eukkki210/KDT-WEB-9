const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000;
const secret = '?dj|3.Z5l&)JU0]xgdc5"L?G?QsgH?>y+?}vdjVD(YB3T>pp~bj/=O"*ZcEe}<P'

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const userInfo = { id: 'eukkki210', pw: '1234', name: '류승기' };

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body;
        const { id: uId, pw: uPw } = userInfo;

        if (id === uId && pw === uPw) {
            const token = jwt.sign({ id }, secret);
            res.json({ result: true, token });
        } else {
            res.status(403).json({ result: false, message: '로그인 정보가 올바르지 않습니다.' });
        }
    } catch (error) {
        console.log(error);
    };
});

app.get('/verify', (req, res) => {
    console.log(req.headers.authorization);
    const auth = req.headers.authorization;

    if (auth) {
        const token = (auth || '').split(' ');
        try {
            const result = jwt.verify(token[1], secret);
            if (result.id === userInfo.id) {
                res.json({ result: true, name: userInfo.name });
            }
        } catch (error) {
            console.log(error);
            res.json({ result: false, message: '인증된 회원이 아닙니다.' });
        }
    } else {
        res.redirect('/login');
    }
})

app.get('/logout', (req, res) => {
    const user = req.session.user;
    if (user === undefined) {
        res.send(`<script>alert('잘못된접근입니다');document.location.href='/';</script>`);
    } else {
        req.session.destroy(() => {
            res.clearCookie('mySession');
            res.redirect('/');
        });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
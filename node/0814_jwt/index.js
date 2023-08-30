const e = require('express');
const jwt = require('jsonwebtoken');
const app = e();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

const secret = 'secretKey';

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login', (req, res) => {
    const { id, pw } = req.body;

    const token = jwt.sign({ id }, secret);
    res.send({ result: true, token })
})

app.post('/verify', (req, res) => {
    console.log(req.headers.authorization);
    const auth = req.headers.authorization;
    const token = auth.split(' ');
    if (token[0] === 'Bearer') {
        jwt.verify(token[1], secret, (err, decoded) => {
            if (err) {
                return res.status(403).send({ message: '검증 실패' })
            }
            console.log(decoded);
            res.send({ user: decoded });
        });        
    } else (
        res.send({ message: '잘못된 인증방식입니다.' })
    )
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
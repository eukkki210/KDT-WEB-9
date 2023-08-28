const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 8000;

let password = '';
const salt = crypto.randomBytes(32).toString('latin1'); // 솔트 생성
const leng = 100; // 반복 횟수
const key = 64; // 생성할 키의 길이
const algo = 'sha512';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { pw } = req.body;
    // createHash: 지정한 알고리즘을 이용하여 해시 생성
    // const password = crypto.createHash("sha512").update(pw).digest("base64");
    // pdkdf2(Sync): (Sync가 붙으면 동기) 비밀번호 기반 키 도출함수
    password = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
    res.send(password);
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo);
    console.log('compare', compare);
    // 기본적인 방법
    // if (compare === password) {
    //     res.send(true);
    // } else {
    //     res.send(false);
    // };
    
    // timingSafeEqual: 두 개의 버퍼를 상수시간으로 비교하는 함수
    const result = crypto.timingSafeEqual(compare, Buffer.from(password, 'base64'));
    res.send(result);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
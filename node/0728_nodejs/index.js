const express = require('express');
// import { Express } from 'express';
const app = express();
const PORT = 8000;

// set() 서버 속성 지정
app.set('view engine', 'ejs');
app.set('views', './views');

// 정적인 파일 불러오기
app.use('/public', express.static('./public'))

// app.get('/', (req, res) => {
//     // send() 클라이언트에 응답 데이터를 보낼 때
//     // res.send('Hello Express');
//     res.send({ result: true, code: 1000, message: "회원가입 성공", data: { name: 'seunggi' } });
// });

app.get('/kdt9', (req, res) => {
    // render() 뷰 엔진 렌더링 
    res.render('test', { name: "승기" });
    // res.send('Hello KDT9');
});

app.get('/caterpillar', (req, res) => {
    res.render('practice1');
});

app.get('/changeimage', (req, res) => {
    res.render('practice2', { fruit: [{ eng: 'apple', kor: '사과' }, { eng: 'banana', kor: '바나나' }, { eng: 'grape', kor: '포도' }, { eng: 'peach', kor: '복숭아' }] });
});

app.get('/gugudan', (req, res) => {
    res.render('practice3', { name: [2, 3, 4, 5, 6, 7, 8, 9] });
})

app.get('/', (req, res) => {
    res.render('practice4', { title: "오늘 승기가 실습한 것들" })
})

app.listen(PORT, () => {
    console.log("http://localhost:${PORT}",);
});
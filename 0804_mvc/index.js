const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// index.js 생략 가능
const router = require('./routes');
app.use('/', router);
// example)
// const userRouter = require('./routes/user');
// app.use('./user', userRouter);


// * 맨 마지막 선언
app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
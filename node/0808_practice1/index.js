const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('static', './static');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
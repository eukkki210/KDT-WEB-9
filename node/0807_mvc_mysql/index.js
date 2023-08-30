const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
// app.set('static', './static');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

// localhost:8000/visitor
const visitorRouter = require('./routes/visitor');
app.use('/visitor', visitorRouter);

app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
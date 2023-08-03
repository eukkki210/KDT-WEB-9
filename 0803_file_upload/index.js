const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 세팅
// 프론트엔드에 다시 이미지 띄우려면 정적 파일 접근 필요
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer
const upload = multer({
    // dest: 업로드할 파일을 저장할 경로를 지정
    dest: 'uploads/',
});
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStorage: 파일을 디스크에 지정하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('index');
});

// practice
app.get('/practice', (req, res) => {
    res.render('practice');
});

app.post('/result', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);   
    res.render('result', {
        userInfo: req.body,
        profile: req.file.path,
    })
})

// 싱글
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);   
    res.send(`<img src=${req.file.path}>`);
})



// 멀티 (ver1)
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('Upload Multiple Each!!')
})

// 멀티 (ver2)
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('Upload Multiple Each!!')
})

// 동적
app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
})


// server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
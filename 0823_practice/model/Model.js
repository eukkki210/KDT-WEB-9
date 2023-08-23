const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const members = [
        {
            id: 1,
            name: '류승기',
            gender: '남성',
            major: "브라질학과"
        },
        {
            id: 2,
            name: '이태희',
            gender: '남성',
            major: "일어일문학과"
        },
        {
            id: 3,
            name: '이우종',
            gender: '남성',
            major: "경영학과"
        },
        {
            id: 4,
            name: '김현승',
            gender: '남성',
            major: "컴퓨터공학과"
        },
        {
            id: 5,
            name: '김민재',
            gender: '남성',
            major: "정보통신학과"
        },
    ];

module.exports = members;
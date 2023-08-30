const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

// 문자열 보간 방법
// INSERT INTO user (userid, pw, name) VALUES (`'${data.userid}', '${data.pw}', '${data.name}'`)
// 단점
// 1. sql 인젝션 공격 취약
// 2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수도 있음.
// Prepared STatement
// INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)

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
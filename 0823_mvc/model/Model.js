// const mysql = require('mysql');

// //mysql연결
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'kdt',
//     password: '',
//     database: 'kdt',
//     port: 3306,
// });

const comments = [
    {
        id: 1,
        userId: 'Helloworld',
        date: '2023-08-01',
        comment: "안녕하세요"
    },
    {
        id: 2,
        userId: 'happy',
        date: '2023-08-02',
        comment: "반갑습니다"
    },
    {
        id: 3,
        userId: 'lucky',
        date: '2023-08-03',
        comment: "행복하세요"
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-04',
        comment: "좋은저녁되세요"
    },
];

module.exports = comments;
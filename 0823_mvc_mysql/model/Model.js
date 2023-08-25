const { query } = require('express');
const mysql = require('mysql');

// mysql연결
// createConnection
// 단일 연결
// 요청할때마다 새로운 연결을 생성
// 작은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용
// createPool
// 연결 풀을 생성, 풀은 미리 정의된 수의 연결을 생성하고 준비
// 요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공, 작업 완료 후 해당 연결 반환
// 연결이 필요하지 않을 경우 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화
// 다중 연결 서비스에 적합
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'eukkki',
//     password: 'Inter!0719',
//     database: 'kdt9',
//     port: 3306,
// });
const conn = mysql.createPool({
    host: 'localhost',
    user: 'eukkki',
    password: 'Inter!0719',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30 // 최대 연결 수 (기본값 10) 
})

// 회원가입 정보 데이터베이스 저장
const dbSignup = (data, cb) => {
    // const query = `INSERT INTO user (userid, pw, name) VALUES ('$/{data.userid}', '${data.pw}', '${data.name}')`
    const query = 'INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)';
    conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log('dbSignup', rows);
        cb();
    });
}

// 로그인
const dbSignin = (data, cb) => {
    // const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`
    const query = 'SELECT * FROM user WHERE userid=? AND pw=?';
    conn.query(query, [data.userid, data.pw], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('dbSignin', rows);
        // select문의 쿼리문은 배열로 반환
        cb(rows);
    });
};

// 회원 정보 조회
const dbProfile = (data, cb) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    conn.query(query, data.number, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log('dbProfile', rows);
        cb(rows);
    });
};

// 히원 정보 수정
const dbProfileEdit = (data, cb) => {
    const query = 'UPDATE user SET userid=?, name=?, pw=? WHERE id=?';
    conn.query(query, [data.userid, data.name, data.pw, data.id], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log('dbProfileEdit', rows);
        cb();
    });
};

module.exports = {
    dbSignup,
    dbSignin,
    dbProfile,
    dbProfileEdit
}
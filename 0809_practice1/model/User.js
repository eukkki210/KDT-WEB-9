import mysql from 'mysql2/promise';

// mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'eukkki',
    password: 'Inter!0719',
    database: 'kdt9',
    port: 3306,
});
// createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
// 연결 수가 많아지면 성능에 영향
// createPool : 다중연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올때마다 생성한 연결을 할당, 동시처리 가능

export const createUser = async (data) => {
    try {
        const query = 'INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)';
        await conn.query(query, [data.userid, data.name, data.pw]);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE userid=? AND pw=?';
        const [rows] = await conn.query(query, [data.userid, data.pw]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

export const editProfile = async (data) => {
    try {
        const query = 'UPDATE user SET userid=?, name=?, pw=? WHERE id=?';
        await conn.query(query, [data.userid, data.name, data.pw, data.id]);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProfile = async (id) => {
    try {
        const query = 'DELETE FROM user WHERE id=?';
        await conn.query(query, id);
    } catch (error) {
        console.log(error)
    };
};
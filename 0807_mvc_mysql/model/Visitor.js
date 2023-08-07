const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'eukkki',
    password: 'Inter!0719',
    database: 'kdt9',
    port: 3306,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

exports.getVisitors = (cb) => {
    const query = `SELECT * FROM visitor`;
    conn.query(query, (err, rows) => {
        if (err) {
            throw err;
        }

        console.log('rows: ', rows);
        cb(rows);
    });
};

// exports.getVisitor = (cb) => {
//     conn.query(`SELECT  FROM visitor`, (err, rows) => {
//         if (err) {
//             throw err;
//         }

//         console.log('Visitor.js: ', rows);
//         cb(rows);
//     });
// };

exports.createVisitor = (visitorData, cb) => {
    const { name, comment } = visitorData;
    const query = `INSERT INTO visitor (name, comment) values (?, ?)`;
    conn.query(query, [name, comment], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.updateVisitor = (visitorData, cb) => {
    const { id, name, comment } = visitorData;
    const query = `UPDATE visitor SET name=?, comment=? where id=?`;
    conn.query(query, [name, comment], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};
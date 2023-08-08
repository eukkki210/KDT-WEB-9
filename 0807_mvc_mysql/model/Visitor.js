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
            console.log(err);
            return;
        }

        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.getVisitor = (id, cb) => {
    console.log("id", id);
    const query = `SELECT * FROM visitor WHERE id=${id}`;

    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.createVisitor = (data, cb) => {
    const query = `INSERT INTO visitor (name, comment) values ('${data.name}', '${data.comment}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.updateVisitor = (data, cb) => {
    const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' where id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.deleteVisitor = (id, cb) => {
    const query = `DELETE FROM visitor WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};
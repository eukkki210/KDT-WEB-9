const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
}

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        console.log(result);
        res.render('visitor', { data: result });
    });
};

exports.getVisitor = (req, res) => {
    // Visitor.getVisitor((result) => {
    //     console.log(result);
    // })
    res.send('방명록 하나 조회');
};

exports.createVisitor = (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;

    Visitor.createVisitor({ name, comment }, (rows) => {
        res.send({ id: rows.insertId, name: req.body.name, comment: req.body.comment });
    })
};

exports.updateVisitor = (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;

    Visitor.updateVisitor({ id, name, comment }, (rows) => {
        res.send({ id: rows.insertId, name: req.body.name, comment: req.body.comment });
    })
    res.send('방명록 하나 수정');
};

exports.deleteVisitor = (req, res) => {
    res.send('방명록 하나 삭제');
};
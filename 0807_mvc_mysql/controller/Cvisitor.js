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
    const id = req.query.id;
    Visitor.getVisitor(id, (result) => {
        console.log(result);
        res.render('visitor', { data: result });
    })
};

exports.createVisitor = (req, res) => {
    Visitor.createVisitor(req.body, (result) => {
        res.send({ id: result.insertId, name: req.body.name, comment: req.body.comment });
    })
};

exports.updateVisitor = (req, res) => {
    Visitor.updateVisitor(req.body, () => {
        res.send({ result: true });
    })
};

exports.deleteVisitor = (req, res) => {
    const id = req.body.id;

    Visitor.deleteVisitor(id, () => {
        res.send({ result: true });
    })
};
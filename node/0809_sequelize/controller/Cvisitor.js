const models = require('../models');

exports.main = (req, res) => {
    res.render('index');
}

// 전체 방명록 조회
exports.getVisitors = (req, res) => {
    models.Visitor.findAll().then(result => {
        // res.render('visitor', { data: result });
        res.send({ data: result })
    });
};

// 방명록 하나 조회
exports.getVisitor = (req, res) => {
    models.Visitor.findOne({ where: { id: req.query.id } })
        .then(result => {
            res.render('visitor', { data: [result] });
        })
};

// 방명록 하나 등록
exports.createVisitor = (req, res) => {
    models.Visitor.create({ name: req.body.name, comment: req.body.comment })
        .then(result => {
            res.send({ id: result.dataValues.id, name: req.body.name, comment: req.body.comment });
        });
};

// 방명록 하나 수정
exports.updateVisitor = (req, res) => {
    models.Visitor.update(
        {
            name: req.body.name,
            comment: req.body.comment
        },
        {
            where: { id: req.body.id }
        }
    ).then(() => {
        res.send({ result: true });
    });
};

// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
    models.Visitor.destroy({ where: { id: req.body.id } })
        .then(() => {
            res.send({ result: true });
        });
};
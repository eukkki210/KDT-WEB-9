const model = require('../model/Model');

// GET
// 메인 페이지
const main = (req, res) => {
    res.render('index');
};
// 회원가입 페이지
const getSignup = (req, res) => {
    res.render('signup');
};
// 로그인 페이지
const getSignin = (req, res) => {
    res.render('signin');
};

// POST
// 회원가입 로직
const postSignup = (req, res) => {
    model.dbSignup(req.body, () => {
        res.json({ result: true });
    });
};
// 로그인 로직
const postSignin = (req, res) => {
    model.dbSignin(req.body, (result) => {
        if (result.length > 0) {
            res.json({ result: true, data: result[0] });
        } else {
            res.json({ result: false });
        };
    });
};

module.exports = {
    main,
    getSignup,
    getSignin,
    postSignup,
    postSignin
}
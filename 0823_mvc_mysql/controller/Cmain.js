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
// 회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    console.log(req.query);
    model.dbProfile(req.params, (result) => {
        res.render('profile', { data: result[0] });
    });
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
// 회원정보 수정 로직
const editProfile = (req, res) => {
    model.dbProfileEdit(req.body, () => {
        res.json({ result: true });
    });
};

module.exports = {
    main,
    getSignup,
    getSignin,
    profile,
    postSignup,
    postSignin,
    editProfile
}
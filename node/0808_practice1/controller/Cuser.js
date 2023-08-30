const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');
}

exports.getSignup = (req, res) => {
    res.render('signup', { title: "회원가입" });
};

exports.postSignup = (req, res) => {
    User.createUser(req.body, () => {
        res.send({ result: true });
    });
};

exports.getSignin = (req, res) => {
    res.render('signin', { title: '로그인' });
};

exports.postSignin = (req, res) => {
    User.getUser(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        };
    });
};

exports.postProfile = (req, res) => {
    console.log(req.body);
    User.getUser(req.body, (result) => {
        res.render('profile', { title: "프로필", userInfo: result[0] });
    })
};

exports.editProfile = (req, res) => {
    User.editProfile(req.body, () => {
        res.send({ result: true });
    })
};

exports.deleteProfile = (req, res) => {
    const id = req.body.id;

    User.deleteProfile(id, () => {
        res.send({ result: true });
    })
};
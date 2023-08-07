const User = require('../model/Muser');
console.log("user", User);

exports.main = (req, res) => {
    res.render('index', {
        title: "axios post 회원가입",
    });
}

exports.login = (req, res) => {
    console.log((User.user));
    const userId = req.body.id;
    const userPw = req.body.pw;
    const myid = User.user().myid;
    const mypw = User.user().mypw;
    if ((userId == myid) && (userPw == mypw)) {
        res.send({ result: true });
    } else {
        res.send({ result: false });
    }
};


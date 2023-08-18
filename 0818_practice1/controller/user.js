const bcrypt = require('bcrypt');
const { User } = require('../models');

const salt = 10;
let hash = '';

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}

exports.index = (req, res) => {
    res.render('index');
};

exports.getLogin = (req, res) => {
    res.render('login', { title: '로그인' });
};

exports.postLogin = async (req, res) => {
    try {
        const { userid, pw } = req.body;
        console.log(pw);
        const user = await User.findOne({ where: { userid } });
        console.log(user.pw);
        const compare = comparePassword(pw, user.pw);
        res.json({ compare });
    } catch (error) {
        console.log(error);
    }
};

exports.getSignup = (req, res) => {
    res.render('signup', { title: "회원가입" });
};

exports.postSignup = async (req, res) => {
    try {
        const { userid, name, pw } = req.body;

        hash = bcryptPassword(pw);
        console.log(hash)

        const user = await User.create({ userid: userid, name: name, pw: hash });
        console.log(user);
        res.json({ result: true });
    } catch (error) {
        console.log(error);
    }
};
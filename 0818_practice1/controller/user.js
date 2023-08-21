const jwt = require('jsonwebtoken');
const jwtSecret = 'secretKey';
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
        const user = await User.findOne({ where: { userid } });

        console.log('User:', user);

        const compare = comparePassword(pw, user.pw);

        if (!compare) {
            return res.status(401).json({ message: 'Incorrect username or password.' });
        }

        const token = jwt.sign({ id: user.id, name: user.name, userid: user.userid }, jwtSecret);

        console.log(token);
        res.json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.getSignup = (req, res) => {
    res.render('signup', { title: "회원가입" });
};

exports.postSignup = async (req, res) => {
    try {
        const { userid, name, pw } = req.body;

        hash = bcryptPassword(pw);

        const user = await User.create({ userid: userid, name: name, pw: hash });

        res.json({ result: true });
    } catch (error) {
        console.log(error);
    }
};

exports.renderProfile = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: 'Authentication failed. Token is missing.' });
    } else {
        const tokenParts = token.split(' ');

        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            res.status(401).json({ message: 'Authentication failed. Invalid token format.' });
        } else {
            const jwtToken = tokenParts[1];

            jwt.verify(jwtToken, jwtSecret, (err, decoded) => {
                if (err) {
                    res.status(401).json({ message: 'Authentication failed. Token is invalid.' });
                } else {
                    const user = decoded;
                    res.render('profile', { user });
                }
            });
        }
    }
};

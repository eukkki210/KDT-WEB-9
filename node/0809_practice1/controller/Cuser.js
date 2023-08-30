import * as User from '../model/User.js';

export const main = (req, res) => {
    res.render('index');
}

export const getSignup = (req, res) => {
    res.render('signup', { title: "회원가입" });
};

export const getSignin = (req, res) => {
    res.render('signin', { title: '로그인' });
};

export const postSignup = async (req, res) => {
    try {
        await User.createUser(req.body);
        res.send({ result: true });
    } catch (error) {
        console.log(error);
    }
};

export const postSignin = async (req, res) => {
    try {
        const result = await User.getUser(req.body);
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        };
    } catch (error) {
        console.log(error);
    };
};

export const postProfile = async (req, res) => {
    try {
        const result = await User.getUser(req.body);
        res.render('profile', { title: "프로필", userInfo: result[0] });
    } catch (error) {
        console.log(error);
    };
    console.log(req.body);
};

export const editProfile = async (req, res) => {
    try {
        await User.editProfile(req.body);
        res.send({ result: true });
    } catch (error) {
        console.log(error);
    };
};

export const deleteProfile = async (req, res) => {
    const id = req.body.id;
    
    try {
        await User.deleteProfile(id);
        res.send({ result: true });
    } catch (error) {
        console.log(error)
    }
};

// const model = require('../model/Model');
// models/index에서 index는 생략
const { User } = require('../models');
const bcrypt = require('bcrypt');

// 쿠키 설정
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, // 1분
};

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    // 쿠키 사용
    // console.log('cookie', req.cookies);
    const isLoggedIn = req.session.isLoggedIn;
    console.log(isLoggedIn)

    if (isLoggedIn) {
        // 쿠키가 존재한다면 로그인 되어있는상태
        res.render('index', { message: '로그인 성공! 회원 리스트 페이지로 이동합니다.' });
    } else {
        // 로그인하지 않은 경우
        res.send(`<script>
        alert('로그인해주세요');
        window.location.href = '/signin';
        </script>`);
    };
};
//회원가입페이지
const signup = (req, res) => {
    // 쿠키 생성
    // res.cookie(쿠키 이름, 쿠키 값, 옵션 객체)
    res.cookie('testCookie', 'signup', cookieConfig);
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    console.log(req.session.userInfo, req.sessinID);
    if (req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`);
    } else {
        res.render('signin');
    };
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    // findOne; 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
    // where는 객체 형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number }
    }).then((result) => {
        res.render('profile', { data: result });
    })
};
// 회원전체 리스트 페이지
const userlist = async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    const username = req.session.userInfo.name;

    if (!isLoggedIn) {
        res.send('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
    } else {
        try {
            // Sequelize를 사용하여 사용자 정보 조회
            const users = await User.findAll();

            // 회원 리스트 페이지에서 회원 정보를 표시
            const memberList = users.map((user) => user.name).join(', ');
            res.send(`<h1>회원 리스트 페이지</h1><p>환영합니다, 
                ${username}님!</p><p>회원 리스트: ${memberList}</p>`);
        } catch (error) {
            console.error('회원 정보를 가져오는 중 오류 발생:', error);
            res.status(500).send('서버 오류');
        }
    }
};
///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const { userid, name, pw } = req.body;
    // create 데이터 생성
    // 실습과제 = 비밀번호 암호화하여 저장 
    // 비밀번호 해싱
    const saltRounds = 10;

    bcrypt.hash(pw, saltRounds, (err, hash) => {
        if (err) {
            console.error('비밀번호 해싱 오류:', err);
        } else {
            // 해싱된 비밀번호를 데이터베이스에 저장
            User.create({ userid, name, pw: hash }).then(() => {
                res.json({ result: true });
            });
        }
    });
};
//로그인
const post_signin = async (req, res) => {
    const { userid, pw } = req.body;

    const user = await User.findOne({ where: { userid } })

    bcrypt.compare(req.body.pw, user.pw, (err, result) => {
        if (err) {
            console.error('비밀번호 확인 오류:', err);
            res.json({ result: false });
        } else if (result) {
            req.session.userInfo = { name: user.name, id: user.id };
            req.session.isLoggedIn = true;
            console.log('비밀번호가 일치합니다.', result);
            res.json({ result: true, data: user });
        } else {
            console.log('비밀번호가 일치하지 않습니다.');
            res.json({ result: false });
        }
    });

    // User.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    // 실습과제 - 로그인
    // step1 아이디를 찾아서 사용자 존재 유/무 체크
    // step2 입력된 비밀번호 암호화하여 기존 데이터와 비교 판독

};

/////////////////////////////////////////
// PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    // update (수정된 정보를 객체 형태로 입력, 수정될 곳 객체 입력)
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

// DELETE
// 회원 탈퇴: destroy()
const delete_profile = async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    const result = await User.destroy({
        where: {
            id
        }
    });

    if (result) {
        res.json({ result: true });
    } else {
        console.log("사용자가 존재하지 않습니다.");
    };
};




module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile,
    userlist
};

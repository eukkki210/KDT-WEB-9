const Member = require('../model/Model');

const main = (req, res) => {
    res.render('index');
};

const members = (req, res) => {
    res.render('members', { lists: Member });
};

const addMember = (req, res) => {
    const { name, gender, major } = req.body;
    const id = Member.length + 1; // 새로운 id 생성
    const newMember = { id, name, gender, major };
    Member.push(newMember);
    res.status(201).json(newMember);
}

module.exports = {
    main,
    members,
    addMember
};

// 모듈 사용 방법
// 방법1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null // 위의 것의 축약형
// 방법2
// const test = () => {}
// module.exports = test
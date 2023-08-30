const Member = require('../model/Model');

const main = (req, res) => {
    res.render('index');
};

const members = (req, res) => {
    res.render('members', { lists: Member });
};

const getMember = (req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const member = Member.find((m) => m.id === id);
    if (!member) {
        return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
};

const addMember = (req, res) => {
    const { name, gender, major } = req.body;
    const id = Member.length + 1; // 새로운 id 생성
    const newMember = { id, name, gender, major };
    Member.push(newMember);
    res.status(201).json(newMember);
};

const modifyMember = (req, res) => {
    const { name, gender, major } = req.body;
    const member = Member.find((m) => m.name === name);
    const memberIndex = member.id-1;
    Member[memberIndex] = { ...Member[memberIndex], name, gender, major };
    console.log(Member[memberIndex]);

    res.json(Member[memberIndex]);
};

module.exports = {
    main,
    members,
    addMember,
    getMember,
    modifyMember
};

// 모듈 사용 방법
// 방법1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null // 위의 것의 축약형
// 방법2
// const test = () => {}
// module.exports = test
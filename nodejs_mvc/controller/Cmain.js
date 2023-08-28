const Visitor = require('../model/Model');

const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { lists: comments });
};

const comment = (req, res) => {
    console.log(req.params);
    // {name: '50'} ;name 콜론 뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('comment', { data: comments[Number(req.params.id) - 1] });
};

module.exports = {
    main,
    comments,
    comment
}

// 모듈 사용 방법
// 방법1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null // 위의 것의 축약형
// 방법2
// const test = () => {}
// module.exports = test
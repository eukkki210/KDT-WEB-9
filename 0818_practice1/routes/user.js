const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
const { verify } = require('jsonwebtoken');

router.get('/', controller.index);
//로그인
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
//회원가입
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);
// jwt 사용 사용자 인증
router.get('/user/profile', controller.renderProfile);

module.exports = router;

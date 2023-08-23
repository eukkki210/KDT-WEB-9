const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 회원 가입
router.get('/signup', controller.getSignup); // 회원가입 페이지 열기
router.post('/signup', controller.postSignup); // 데이터베이스에 회원정보 저장

// 로그인
router.get('/signin', controller.getSignin); // 로그인 페이지 열기
router.post('/signin', controller.postSignin); // 로그인하기

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 회원 가입
router.get('/members', controller.members);

// 로그인
router.post('/members', controller.addMember);

// 회원 정보
router.get('/members/:id', controller.getMember);
router.post('/members/edit', controller.modifyMember);

module.exports = router;

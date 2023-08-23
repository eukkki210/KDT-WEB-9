const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 회원 리스트 조회
router.get('/members', controller.members);

// 회원 정보 추가
router.post('/members', controller.addMember);

module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('../controller/Cstudent');

router.get('/', controller.main);

router.get('/student', controller.getStudent);

router.post('/student', controller.postStudent);

router.post('/class', controller.postClass);

module.exports = router;
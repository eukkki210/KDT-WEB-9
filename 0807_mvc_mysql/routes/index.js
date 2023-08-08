const express = require('express');
const controller = require('../controller/Cvisitor');
const { route } = require('../../0807_practice1/routes');
const router = express.Router();

router.get('/', controller.main);

module.exports = router;
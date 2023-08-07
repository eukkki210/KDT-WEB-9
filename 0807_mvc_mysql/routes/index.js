const express = require('express');
const controller = require('../controller/Cvisitor');
const { route } = require('../../0807_practice1/routes');
const router = express.Router();

router.get('/', controller.main);

router.get('/visitor' , controller.getVisitors);

router.get('/visitor/get', controller.getVisitor);

router.post('/visitor/write', controller.createVisitor);

router.patch('/visitor/edit', controller.updateVisitor);

router.delete('/visitor/delete', controller.deleteVisitor);

module.exports = router;
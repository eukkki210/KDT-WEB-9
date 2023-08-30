const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/' , controller.getVisitors);

router.get('/get', controller.getVisitor);

router.post('/write', controller.createVisitor);

router.patch('/edit', controller.updateVisitor);

router.delete('/delete', controller.deleteVisitor);

module.exports = router;
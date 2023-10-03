const express = require('express');
const router = express.Router();
const controller = require('../controllers/Cmain.js');

router.get('/todos', controller.getAllTodos);
router.post('/todo', controller.createTodo);
router.patch('/todo/:todoId', controller.updateTodo);
router.delete('/todo/:todoId', controller.deleteTodo);

module.exports = router;

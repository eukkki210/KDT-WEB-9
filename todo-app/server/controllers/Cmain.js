const { Todo } = require('../models');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: '서버 오류' });
    }
};

exports.createTodo = async (req, res) => {
    const { title, done } = req.body;
    try {
        const newTodo = await Todo.create({ title, done });
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ error: '서버 오류' });
    }
};

exports.updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const { title, done } = req.body;
    try {
        const [rowsUpdated] = await Todo.update(
            { title, done },
            { where: { id: todoId } }
        );

        if (rowsUpdated === 0) {
            return res.status(404).json({ error: 'Todo를 찾을 수 없음' });
        }

        const updatedTodo = await Todo.findByPk(todoId);

        if (!updatedTodo) {
            return res.status(404).json({ error: '업데이트된 Todo를 찾을 수 없음' });
        }

        res.json(updatedTodo.toJSON());
    } catch (error) {
        res.status(500).json({ error: '서버 오류' });
    }
};


exports.deleteTodo = async (req, res) => {
    const { todoId } = req.params;
    try {
        const todo = await Todo.findByPk(todoId);
        if (!todo) {
            return res.status(404).json({ error: 'Todo를 찾을 수 없음' });
        }
        await todo.destroy();
        res.json({ message: 'Todo 삭제 완료' });
    } catch (error) {
        res.status(500).json({ error: '서버 오류' });
    }
};
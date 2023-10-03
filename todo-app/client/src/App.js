import React, { useState } from 'react';
import TodoAdd from './TodoAdd';
import Todo from './Todo';
import './App.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodo = async (todo, data) => {
    try {
      const res = await axios.patch(`/todo/${todo.id}`, data);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? { ...t, ...res.data } : t))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      const res = await axios.post('/todo', { title: newTodo, done: false });
      setTodos((prevTodos) => [...prevTodos, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (todoDelete) => {
    try {
      await axios.delete(`/todo/${todoDelete.id}`);
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== todoDelete.id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTodo = (todoToggle) => {
    const updatedData = { done: !todoToggle.done };
    updateTodo(todoToggle, updatedData);
  };

  const handleEditTodo = (todoEdit, newTitle) => {
    const updatedData = { title: newTitle };
    updateTodo(todoEdit, updatedData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd onAddTodo={handleAddTodo} />
      <p className="todo-list-info">{todos.length} Todos</p>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
        />
      ))}
    </div>
  );
}

export default App;

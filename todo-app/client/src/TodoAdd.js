import React, { useState } from 'react';

function TodoAdd({ onAddTodo }) {
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddClick = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddClick();
        }
    };

    return (
        <div className='input-container'>
            <input
                type="text"
                placeholder="Add your new Todo"
                value={newTodo}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddClick}>ADD</button>
        </div>
    );
}

export default TodoAdd;

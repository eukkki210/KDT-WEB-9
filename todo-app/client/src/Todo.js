import React, { useState } from 'react';

function Todo({ todo, onDelete, onToggle, onEdit }) {
    const [editing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleDelete = () => onDelete(todo);

    const handleToggle = () => onToggle(todo);

    const handleDoubleClick = () => setEditing(true);

    const handleEditChange = (e) => setEditedTitle(e.target.value);

    const handleEditKeyDown = (e) => {
        if (e.key === 'Enter') {
            onEdit(todo, editedTitle);
            setEditing(false);
        }
    };

    return (
        <div className="todo-item">
            <input
                className='todo-checkbox'
                type="checkbox"
                checked={todo.done}
                onChange={handleToggle}
                id={`todo-${todo.id}`}
            />
            {editing ? (
                <input
                    className='todo-title'
                    type="text"
                    value={editedTitle}
                    onChange={handleEditChange}
                    onBlur={() => setEditing(false)}
                    onKeyDown={handleEditKeyDown}
                    autoFocus
                />
            ) : (
                <label
                    htmlFor={`todo-${todo.id}`}
                    className={`todo-title ${todo.done ? 'done' : ''}`}
                    onDoubleClick={handleDoubleClick}
                >
                    {todo.title}
                </label>
            )}
            <button className='todo-delete' onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default Todo;

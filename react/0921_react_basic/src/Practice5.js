import { useState } from "react";

export default function Practice5() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [warning, setWarning] = useState("");

    const handleTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (tasks.length >= 10) {
            setWarning("할 일이 너무 많아요!");
            return;
        }
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
        setWarning("");
    };

    const deleteTask = () => {
        const remainingTasks = tasks.filter((task) => !task.completed);
        setTasks(remainingTasks);
    }

    const handleTaskChecked = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => handleTaskChange(e)}
                        placeholder="할 일 입력"
                    />
                </form>
                <button type="button" onClick={addTask}>추가</button>
            </div>
            <br />
            <div>
                <form>
                    <ul>
                        {tasks.map((task, index) => {
                            return (
                                <li>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleTaskChecked(index)}
                                    />
                                    {task.text}
                                </li>
                            )
                        })}
                    </ul>
                </form>
                <br />
                {warning && <p>{warning}</p>}
                <br />
                <button type="button" onClick={deleteTask}>완료된 할 일 삭제</button>
            </div>
        </div>
    );
}

import { useState } from "react";
import "./task_input.css";

function TaskInput({ onAddTask }) {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if (task.trim() !== "") {
            onAddTask(task);
            setTask("");
        }
    }

    return(
        <div className="task-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default TaskInput;

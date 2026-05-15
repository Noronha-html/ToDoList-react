import "./task_item.css";
import { useState } from "react";

function TaskItem({ task, isCompleted, onConcludeTask, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleConcludeTask = () => {
        onConcludeTask(task.id);
    }
    const handleEditTask = (id) => {
        setIsEditing(true);
        setEditedText(task.text);
    }

    const handleDeleteTask = () => {
        onDeleteTask(task.id);
    }

    return (
        <li className="task-list-item">
            {isEditing ? (
                <div className="edit-task-container">
                    <input
                        type="text"
                        value={editedText}
                        className="edit-task-input"
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className="save-button" onClick={() => {
                        editedText.trim() && (task.text = editedText.trim());
                        setIsEditing(false);
                    }}>
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <span className="task-text">{task.text}</span>
                    <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={isCompleted}
                        onChange={handleConcludeTask}
                    />
                    <button
                        className="edit-button"
                        onClick={() => handleEditTask(task.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="delete-button"
                        onClick={handleDeleteTask}
                    >
                        Delete
                    </button>
                </>
            )}
        </li>
    );
}

export default TaskItem;

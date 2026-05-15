import "./task_item.css";

function TaskItem({ task, isCompleted, onConcludeTask, onDeleteTask }) {
    const handleConcludeTask = () => {
        onConcludeTask(task.id);
    }

    const handleDeleteTask = () => {
        onDeleteTask(task.id);
    }

    return (
        <li className="task-list-item">
            <span className="task-text">{task.text}</span>
            <input
                type="checkbox"
                className="task-checkbox"
                checked={isCompleted}
                onChange={handleConcludeTask}
            />
            <button
                className="delete-button"
                onClick={handleDeleteTask}
            >
                Delete
            </button>
        </li>
    );
}

export default TaskItem;

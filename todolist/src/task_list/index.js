import "./task_list.css";
import TaskFilters from "../task_filters";
import TaskItem from "../task_item";

function TaskList({ tasks, completedTasks = [], onConcludeTask, onDeleteTask, onFilterChange }) {

    return (
    <div className="task-list-container">
        {
            tasks.length > 0 ?
            <TaskFilters onFilterChange={onFilterChange} /> :
            null
        }

        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    isCompleted={completedTasks.includes(task.id)}
                    onConcludeTask={onConcludeTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    </div>
    );
}

export default TaskList;

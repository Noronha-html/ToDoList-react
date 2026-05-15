import "./task_filters.css";

function TaskFilters({ onFilterChange }) {
    return (
        <div className="task-filters-container">
            <select
                onChange={(e) => onFilterChange(e.target.value)}
                className="task-filter-select"
            >
                <option value="all">Todas</option>
                <option value="pending">Pendentes</option>
                <option value="completed">Concluídas</option>
            </select>
        </div>
    );
}

export default TaskFilters;
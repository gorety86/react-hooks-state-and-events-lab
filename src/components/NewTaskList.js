import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
    const tasList = tasks.map(task=>(
        <Task 
        text = {task.text}
        category={task.category}
        key={task.text}
        handleDelete={handleDelete}
        />
    ))

    return (
        <div className="task">
            {TaskList}
        </div>
    );
}
export default TaskList;
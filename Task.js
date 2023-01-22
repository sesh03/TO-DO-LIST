import React, { useState } from 'react';

function Task({ task, index, completeTask, removeTask }) {
    return (
        <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => removeTask(index)}>x</button>
        </div>
    );
}

export default Task;

import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([
        {
            title: "Take out the trash",
            completed: false
        },
        {
            title: "Do the dishes",
            completed: false
        },
        {
            title: "Go for a walk",
            completed: false
        }
    ]);

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>To-do List</h1>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                ))}
            </div>
            <form onSubmit={e => {
                e.preventDefault();
                addTask(e.target.task.value);
                e.target.task.value = "";
            }}>
                <input type="text" name="task" placeholder="Add a new task..." />
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default TaskList;

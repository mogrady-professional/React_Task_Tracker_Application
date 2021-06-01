// import React from 'react'
// rafce

import Task from './Task'
// Catch the props from App.js
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (

        <>
            {tasks.map((task, index) => (
                // <h3 key={task.id}>{task.text}</h3>
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
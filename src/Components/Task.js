import { FaTimes } from 'react-icons/fa'

// import React from 'react'
// Pass in props from Tasks.js
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

// Bring in icons we want to use instead of using a CDN
// npm i react-icons
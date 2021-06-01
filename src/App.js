import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'



// For Function METHOD A
const App = () => {
    // You can write JavaScript directly in here which makes it really dynamic!
    // const name = 'Michael'
    // const x = true


    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    //   Fetch Tasks
    // Fetch API with Async Await
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        // console.log(data)
        return data
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }


    // Add Task

    // console.log(task);
    // Get random number
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)

    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        // Add the new (data) to the existing tasks
        setTasks([...tasks, data])
    }


    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
        // console.log('delete', id)
        // Filter out tasks - delete functionality
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        // console.log(id)
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        )
    }
    // JSX Elements must have one parent element only.
    return (
        <Router>

            <div className='container'>
                {/* <h2>Hello {name}</h2>
            <h3>Hello {x ? 'Yes' : 'No'}</h3> */}

                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
                {/* Shorter way of doing a ternerary operator, dont need an else */}

                <Route path='/' exact render={(props) => (
                    // Fragment
                    <>
                        {showAddTask && <AddTask onAdd={addTask} />}
                        {tasks.length > 0 ?
                            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'
                        }

                    </>
                )} />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}

// To Import a Class you need to import React from 'react'

// For Class Component METHOD B
// import React from 'react'
// class App extends React.Component {
//     render() {
//         return <h1>Hello from a Class</h1>
//     }
// }

export default App;
import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Newtask from './components/Newtask'
import Counter from './components/Counter'

const App = () => {

  const [tasks, setTasks] = useState(
    [
       {
       id:1,
       text: 'learn JS with 30-day challenge',
       
       },
       {
       id:2,
       text: 'make react to-do list',
       
       }
   ]
)

const deleteTask = (id) => {  //filter thru array for each task if task id is not equal to id
  setTasks(tasks.filter((task) =>
  task.id !== id))
}

const addTask = (task) => {
  const id = tasks.length + 1
  const addTask = { id, ...task }
  setTasks([...tasks, addTask])
}
 
const counter = tasks.length 


  return (
    <div className='container'>
      <Header />
      <Counter counter={counter} />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      <Newtask onAdd={addTask}/>
    </div>
  )
}

export default App




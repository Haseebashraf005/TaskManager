import React, { useEffect, useState } from 'react'
import { Header } from './coponents/Header'
import { AddTask } from './coponents/AddTask'
import { ShowTasks } from './coponents/ShowTasks'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  //create the state for eidit purpose 
  const [individualTask, setindividualTask] = useState({})

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <>
      <div className="App">
        <Header />
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          individualTask={individualTask}
          setindividualTask={setindividualTask}
        />
        <ShowTasks
          tasks={tasks}
          setTasks={setTasks}
          individualTask={individualTask}
          setindividualTask={setindividualTask}
        />
      </div>
    </>
  )
}

export default App 
import React, { useState } from 'react'
import { Header } from './coponents/Header'
import { AddTask } from './coponents/AddTask'
import { ShowTasks } from './coponents/ShowTasks'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    // { id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030" },
    // { id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030" },
    // { id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030" },
  ])

  const [individualTask ,setindividualTask] = useState({})
  // console.log(individualTask)


  return (
    <>
      <div className="App">
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} individualTask={individualTask} />
        <ShowTasks tasks={tasks} setTasks={setTasks} setindividualTask={setindividualTask} />
      </div>
    </>
  )
}

export default App 
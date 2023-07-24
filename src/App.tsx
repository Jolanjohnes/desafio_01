import './global.css'
import style from './App.module.css'

import { Header } from './components/Header'
import { ListTask } from './components/ListTask'
import { useState } from 'react'

export interface Itask {
  description: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Itask[]>([])

  function addNewTask(description: string): void {
    setTasks([...tasks, { description, completed: false }])
    console.log(tasks)
  }

  function deleteTask(description: string): void {
    const newListTask = tasks.filter(task => {
      return task.description !== description
    })
    setTasks(newListTask)
  }

  return (
    <div className={style.app}>
      <Header addNewTask={addNewTask} />
      <ListTask tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App

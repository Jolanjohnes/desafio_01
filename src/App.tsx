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

  function onAddNewTask(description: string): void {
    setTasks([...tasks, { description, completed: false }])
  }

  function onDeleteTask(description: string): void {
    const newListTask = tasks.filter(task => {
      return task.description !== description
    })
    setTasks(newListTask)
  }

  function onCompletedTask(description: string) {
    const newListTask = tasks.map(task => {
      if (task.description === description) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTasks(newListTask)
  }

  return (
    <div className={style.app}>
      <Header addNewTask={onAddNewTask} />
      <ListTask
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onCompletedTask={onCompletedTask}
      />
    </div>
  )
}

export default App

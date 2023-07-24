import style from './Task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoTrash } from 'react-icons/go'
import { Itask } from '../App'

interface TaskProps {
  task: Itask
  deleteTask: (description: string) => void
}

export function Task({ task, deleteTask }: TaskProps) {
  return (
    <div className={style.task}>
      <button>
        {task.completed == false ? (
          <div />
        ) : (
          <BsFillCheckCircleFill size={24} />
        )}
      </button>

      <p className={task.completed ? style.completed : ''}>
        {task.description}
      </p>

      <button onClick={() => deleteTask(task.description)}>
        <GoTrash size={24} />
      </button>
    </div>
  )
}

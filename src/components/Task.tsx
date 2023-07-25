import style from './Task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoTrash } from 'react-icons/go'
import { Itask } from '../App'

interface TaskProps {
  task: Itask
  onDeleteTask: (description: string) => void
  onCompletedTask: (description: string) => void
}

export function Task({ task, onDeleteTask, onCompletedTask }: TaskProps) {
  return (
    <div className={style.task}>
      <button
        onClick={() => {
          onCompletedTask(task.description)
        }}
      >
        {task.completed == false ? (
          <div />
        ) : (
          <BsFillCheckCircleFill size={24} />
        )}
      </button>

      <p className={task.completed ? style.completed : ''}>
        {task.description}
      </p>

      <button onClick={() => onDeleteTask(task.description)}>
        <GoTrash size={24} />
      </button>
    </div>
  )
}

import style from './ListTask.module.css'
import ListEmpty from './../assets/ListEmpty.svg'
import { Task } from './Task'
import { Itask } from '../App'

interface listProps {
  tasks: Itask[]
  deleteTask: (description: string) => void
}

export function ListTask({ tasks, deleteTask }: listProps) {
  const taskCompleted = tasks.filter(task => {
    return task.completed == true
  })

  return (
    <div className={style.listTask}>
      <header className={style.header}>
        <p>
          Tarefas Criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas <span>{`${taskCompleted.length} de ${tasks.length}`}</span>
        </p>
      </header>

      {tasks.length <= 0 ? (
        <div className={style.details}>
          <img src={ListEmpty} alt="imagem de lista de tarefas" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p> Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        tasks.map(task => {
          return (
            <Task task={task} key={task.description} deleteTask={deleteTask} />
          )
        })
      )}
    </div>
  )
}

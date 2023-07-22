import style from './ListTask.module.css'
import ListEmpty from './../assets/ListEmpty.svg'
export function ListTask() {
  return (
    <div className={style.listTask}>
      <header className={style.header}>
        <p>
          Tarefas Criadas <span>0</span>
        </p>
        <p>
          Concluidas <span>0</span>
        </p>
      </header>

      <div className={style.details}>
        <img src={ListEmpty} alt="imagem de lista de tarefas" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p> Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}

import styles from './Header.module.css'
import Logo from './../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FormEvent, useState } from 'react'

interface HeaderProps {
  addNewTask: (description: string) => void
}

export function Header({ addNewTask }: HeaderProps) {
  const [taskDesciption, setTaskDesciption] = useState('')

  function handleInputTask(e: FormEvent<HTMLInputElement>) {
    setTaskDesciption(e.currentTarget.value)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    addNewTask(taskDesciption)
    setTaskDesciption('')
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="imagem de uma foguete" />

      <form
        className={styles.formNewTask}
        onSubmit={event => handleSubmit(event)}
      >
        <input
          className={styles.formInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="task"
          onChange={handleInputTask}
          value={taskDesciption}
          required
        />
        <button className={styles.formButton} type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}

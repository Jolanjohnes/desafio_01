import styles from './Header.module.css'
import Logo from './../assets/Logo.svg'
export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="imagem de uma foguete" />

      <form className={styles.formNewTask}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.formButton} type="submit">
          Criar
        </button>
      </form>
    </header>
  )
}

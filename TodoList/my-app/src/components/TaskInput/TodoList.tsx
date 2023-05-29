import styles from './taskInput.module.scss'

export default function TaskInput() {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='Nhập vào đây' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

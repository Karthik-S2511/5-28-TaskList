import React from 'react'
import Counter from './Counter'
import styles from './task.module.css'

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  const toggleTaskStatus = () => {
    let toggledTask = { ...task, done: !task.done }
    handleUpdateTask(toggledTask)
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      let updatedCountTask = { ...task, count: newCount }
      handleUpdateTask(updatedCountTask)
    }
  }

  return (
    <li className={styles.task}>
      <input type='checkbox' checked={task.done} onChange={toggleTaskStatus} />
      <div>{task.text}</div>
      <Counter count={task.count} updateCount={updateCount} />
      <button onClick={() => handleRemoveTask(task.id)}>
        <strong>X</strong>{' '}
      </button>
    </li>
  )
}

export default Task

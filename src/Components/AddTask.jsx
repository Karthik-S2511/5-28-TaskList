import React, { useState } from 'react'
import styles from './addTask.module.css'

const AddTask = ({ addTask }) => {
  // we need state to store the data from input.
  const [newTask, setNewTask] = useState('')

  // callback function to handle changes and uplift the data to its parent (TaskApp so that it could be accessible by all the components). Only 2 steps 1. value should be newTask and to store all the inputs, use onChange.

  const handleClick = () => {
    addTask(newTask)
    setNewTask('')
  }
  return (
    <div
      className={styles.addTask}
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    >
      <input type='text' />
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTask

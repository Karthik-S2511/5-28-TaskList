import React from 'react'
import styles from './taskHeader.module.css'

const TaskHeader = ({ tasks }) => {
  let totalTask = tasks?.length
  let IncompTask = tasks.filter((ele) => !ele.done).length

  return (
    <div className={styles.taskHeader}>
      <h1>Task List</h1>
      <span>
        You have <b>{IncompTask}</b> of <b>{totalTask}</b> tasks remaining.
      </span>
    </div>
  )
}

export default TaskHeader

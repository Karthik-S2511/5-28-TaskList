import React, { useState } from 'react'
import { v4 } from 'uuid'
import styles from './taskApp.module.css'
import AddTask from './AddTask'
import TaskHeader from './TaskHeader'
import Tasks from './Tasks'
import taskData from '../Data/tasks.json'

const TaskApp = () => {
  // to store the datas received from input (AddTask component) to task.json, we use useState and its initial value will be set to task.json
  const [tasks, setTasks] = useState(taskData)
  // console.log(tasks)

  // callback function to uplift the datas received as inputs from a different component.
  const addTask = (newTask) => {
    let isTaskPresent = tasks.some((ele) => ele.text === newTask)
    if (newTask && !isTaskPresent) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      }
      setTasks([...tasks, newTaskObj])
    }
  }

  const handleUpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, curr) => {
      if (curr.id === updatedTask.id) {
        acc.push(updatedTask)
      } else {
        acc.push(curr)
      }
      return acc
    }, [])
    // console.log(newTasks)
    setTasks([...newTasks])
  }

  const handleRemoveTask = (taskID) => {
    let newTasks = tasks.filter((ele) => ele.id !== taskID)
    // console.log(newTasks)
    setTasks([...newTasks])
  }

  return (
    <div className={styles.main}>
      <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          handleUpdateTask={handleUpdateTask}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  )
}

export default TaskApp

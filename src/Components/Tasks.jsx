import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((ele) => (
            // console.log(ele)
            <Task
              key={ele.id}
              task={ele}
              handleUpdateTask={handleUpdateTask}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p>Your Task List is Empty.</p>
          <b>Add a New Task above.</b>
        </div>
      )}
    </>
  )
}

export default Tasks

import React from 'react'

const Counter = ({ count, updateCount }) => {
  return (
    <div>
      <button onClick={() => updateCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => updateCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter

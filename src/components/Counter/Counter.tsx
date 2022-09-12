import React, { useState } from 'react'

import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='counter-container'>
      <h3 className='the-heading'>Update the count and edit src/App.tsx, state is preserved!!!</h3>
      <h3 className='the-heading green'>Update the count and edit src/App.tsx, state is preserved!!!</h3>
      <button
        data-testid='counter-button'
        onClick={() => setCount((c) => c + 1)}
      >
        Count - {count}
      </button>
    </div>
  )
}

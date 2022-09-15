import React from 'react'

const GoalStatus = ({ books, goal }) => {
  const porcentage = (books.length / goal) * 100

  return (
    <main>
      <div className='progress'>
        <div
          className={porcentage === 0 ? 'zero' : 'porcentage'}
          style={{ width: porcentage === 0 ? '100%' : `${porcentage}%` }}
        ></div>
      </div>
      <p>{porcentage}% da meta concluída</p>
    </main>
  )
}

export default GoalStatus

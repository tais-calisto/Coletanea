import React from 'react'

const GoalStatus = ({ books, goal }) => {
  const porcentage = (books.length / goal) * 100

  return (
    <div className='progress'>
      <div
        className={porcentage === 0 ? 'zero' : 'porcentage'}
        style={{ width: porcentage === 0 ? '100%' : `${porcentage}%` }}
      >
        <p>Lidos: {books.length}</p>
      </div>
    </div>
  )
}

export default GoalStatus

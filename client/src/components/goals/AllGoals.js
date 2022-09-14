import React from 'react'
import BooksByGoals from './GoalStatus'

const AllGoals = (goal) => {
  return (
    <li>
      <h5>
        Ler {goal.books} livros por{' '}
        {goal.period === 'year'
          ? 'ano'
          : goal.period === 'month'
          ? 'mês'
          : 'semana'}
      </h5>
      <BooksByGoals books={goal.completed} goal={goal.books} />
    </li>
  )
}

export default AllGoals

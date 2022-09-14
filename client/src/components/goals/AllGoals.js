import React from 'react'
import BooksByGoals from './GoalStatus'

const AllGoals = (goal) => {
  return (
    <li>
      <p>
        Ler {goal.books} livros por{' '}
        {goal.period === 'year'
          ? 'ano'
          : goal.period === 'month'
          ? 'mês'
          : 'semana'}
      </p>

      <BooksByGoals books={goal.completed} />
    </li>
  )
}

export default AllGoals

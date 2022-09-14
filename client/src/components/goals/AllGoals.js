import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals, getBooksByGoals } from '../../features/goals/goalsSlice'
import { StyleGoals } from '../../styles/ShowGoals.styled'
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

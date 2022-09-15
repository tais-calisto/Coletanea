import React from 'react'
import BooksByGoals from './GoalStatus'
import { IconTrash } from '@tabler/icons'
import { deleteGoal } from '../../features/goals/goalsSlice'
import { useDispatch } from 'react-redux'

const AllGoals = (goal) => {
  const dispatch = useDispatch()

  const handleDelete = async () => {
    console.log(goal._id)
    await dispatch(deleteGoal(goal._id))
  }

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
      <button onClick={handleDelete}>
        <IconTrash />
      </button>
      <BooksByGoals books={goal.completed} goal={goal.books} />
    </li>
  )
}

export default AllGoals

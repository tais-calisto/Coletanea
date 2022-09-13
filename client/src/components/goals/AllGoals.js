import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals } from '../../features/goals/goalsSlice'
import { StyleGoals } from '../../styles/ShowGoals.styled'
import BooksByGoals from './BooksByGoals'

const AllGoals = () => {
  const dispatch = useDispatch()
  useMemo(async () => {
    await dispatch(getGoals())
  }, [dispatch])

  const { goals } = useSelector((store) => store.goals)

  return (
    <StyleGoals>
      <h4>Metas Definidas:</h4>
      <ul>
        {goals.map((goal, index) => {
          return (
            <>
              <li key={goal._id}>
                <p>
                  Ler {goal.books} livros por{' '}
                  {goal.period === 'year'
                    ? 'ano'
                    : goal.period === 'month'
                    ? 'mês'
                    : 'semana'}
                </p>
              </li>
              <BooksByGoals key={index} goal={goal} />
            </>
          )
        })}
      </ul>
    </StyleGoals>
  )
}

export default AllGoals

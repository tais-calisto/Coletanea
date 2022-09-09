import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals } from '../../features/goals/goalsSlice'

const AllGoals = () => {
  const dispatch = useDispatch()
  useMemo(async () => {
    await dispatch(getGoals())
  }, [dispatch])

  const { goals } = useSelector((store) => store.goals)

  return (
    <>
      {goals.map((goal) => {
        return (
          <p key={goal._id}>
            {goal.books}
            {goal.period}
          </p>
        )
      })}
    </>
  )
}

export default AllGoals

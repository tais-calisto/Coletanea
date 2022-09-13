import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksByGoals } from '../../features/goals/goalsSlice'

const BooksByGoals = ({ goal }) => {
  const time = {
    startDate: goal.createdAt,
    period: goal.period,
  }

  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getBooksByGoals(time))
  }, [dispatch])

  return <div>BooksByGoals</div>
}

export default BooksByGoals

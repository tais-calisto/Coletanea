import React from 'react'
import GoalForm from '../../components/goals/GoalForm'
import AllGoals from '../../components/goals/AllGoals'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals } from '../../features/goals/goalsSlice'
import { StyleGoals } from '../../styles/ShowGoals.styled'

const Goals = () => {
  const dispatch = useDispatch()

  useMemo(async () => {
    await dispatch(getGoals())
  }, [dispatch])

  const { goals } = useSelector((store) => store.goals)

  return (
    <>
      <GoalForm />
      <StyleGoals>
        <h4>Metas Definidas:</h4>
        <ul>
          {goals.map((goal) => {
            return <AllGoals key={goal._id} {...goal} />
          })}
        </ul>
      </StyleGoals>
    </>
  )
}

export default Goals

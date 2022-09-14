import React, { useEffect } from 'react'
import GoalForm from '../../components/goals/GoalForm'
import AllGoals from '../../components/goals/AllGoals'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals } from '../../features/goals/goalsSlice'
import { StyleGoals } from '../../styles/ShowGoals.styled'

const Goals = () => {
  const dispatch = useDispatch()

  const { goals } = useSelector((store) => store.goals)

  useEffect(() => {
    async function showGoals() {
      await dispatch(getGoals())
    }
    showGoals()
  }, [dispatch, goals])

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

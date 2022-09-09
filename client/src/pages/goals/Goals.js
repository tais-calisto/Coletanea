import React from 'react'
import { StyleShowBooks } from '../../styles/SearchResults.styles'
import GoalForm from '../../components/goals/GoalForm'
import AllGoals from '../../components/goals/AllGoals'

const Goals = () => {
  return (
    <StyleShowBooks>
      <GoalForm />
      <AllGoals />
    </StyleShowBooks>
  )
}

export default Goals

import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals, getBooksByGoals } from '../../features/goals/goalsSlice'
import { StyleGoals } from '../../styles/ShowGoals.styled'

const GoalStatus = ({ books }) => {
  return <div>Livros lidos: {books.length}</div>
}

export default GoalStatus

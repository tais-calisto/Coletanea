import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../../features/goals/goalsSlice'

const GoalForm = () => {
  const dispatch = useDispatch()
  const books = useRef(null)
  const [period, setPeriod] = useState('ano')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const goal = {
      books: books.current.value,
      period: period,
    }

    await dispatch(createGoal(goal))
  }

  const handleChange = (e) => {
    setPeriod(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='books'>Ler:</label>
      <input id='books' ref={books}></input>
      <label htmlFor='period'>por: </label>
      <select id='period' onChange={handleChange}>
        <option value={'ano'}>ano</option>
        <option value={'mês'}>mês</option>
        <option value={'semana'}>semana</option>
      </select>
      <button>Definir meta</button>
    </form>
  )
}

export default GoalForm

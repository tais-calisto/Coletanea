import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../../features/goals/goalsSlice'
import { StyleGoalForm } from '../../styles/GoalFrom.styled'

const GoalForm = () => {
  const dispatch = useDispatch()
  const books = useRef(null)
  const [period, setPeriod] = useState('year')

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
    <StyleGoalForm>
      <h3>Adicionar meta de leitura:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='books'>Ler: </label>
        <input
          id='books'
          ref={books}
          placeholder={' Quantidade de livros'}
        ></input>
        <label htmlFor='period'> por: </label>
        <select id='period' onChange={handleChange}>
          <option value={'year'}>ano</option>
          <option value={'month'}>mês</option>
          <option value={'week'}>semana</option>
        </select>
        <br />
        <button>Definir meta</button>
      </form>
    </StyleGoalForm>
  )
}

export default GoalForm

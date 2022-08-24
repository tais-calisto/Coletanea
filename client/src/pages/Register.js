import React, { useState } from 'react'
import { StyledRegister } from '../styles/Register.styled'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'

const inicialState = { name: '', email: '', password: '', isRegister: true }

const Register = () => {
  const [values, setValues] = useState(inicialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isRegister } = values
    if (!email || !password || (!isRegister && !name)) {
      toast.error('Por favor, preencha todos os campos', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
  }

  const toggleForm = () => {
    setValues({ ...values, isRegister: !values.isRegister })
  }

  return (
    <StyledRegister>
      <h1>Coletânea</h1>
      <h3>{values.isRegister ? 'Acesse sua conta' : 'Crie sua conta'}</h3>

      <form onSubmit={handleSubmit}>
        {!values.isRegister && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText='Nome:'
          />
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText='E-mail:'
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText='Senha:'
        />
        <button type='submit' className='submit'>
          Enviar
        </button>
      </form>

      <p>
        {values.isRegister ? 'Ainda não é cadastrado? ' : 'Já é cadastrado? '}
        <button type='button' onClick={toggleForm}>
          {' '}
          {values.isRegister ? 'Crie sua conta' : 'Acesse sua conta'}
        </button>
      </p>
    </StyledRegister>
  )
}

export default Register

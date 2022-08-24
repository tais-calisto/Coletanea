import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLanding } from '../styles/Landing.styled'

const Landing = () => {
  return (
    <StyledLanding>
      <header>
        <h1>Coletânea</h1>
      </header>
      <main>
        <h2>
          Crie metas e acompanhe o andamento de suas <span>leituras</span>
        </h2>
        <h3>
          Desenvolva e mantenha o hábito de leitura, salve suas anotações,
          progressos e acompanha suas metas literárias
        </h3>
        <Link to='/register'>Login/Register</Link>
      </main>
    </StyledLanding>
  )
}

export default Landing

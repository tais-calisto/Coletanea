import styled from 'styled-components'

export const StyleGoalForm = styled.section`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.colors.darkPink};
    padding-bottom: 2rem;
  }

  form {
    input,
    select,
    button {
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.lightPink};
      padding: 0.5rem;
    }
    select,
    button {
      background-color: ${({ theme }) => theme.colors.lightPink};
      color: ${({ theme }) => theme.colors.darkPink};
    }
    button {
      margin-top: 1rem;
      transition: 0.2s all ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkPink};
        color: ${({ theme }) => theme.colors.lightPink};
        border-color: ${({ theme }) => theme.colors.darkPink};
      }
    }
  }
`

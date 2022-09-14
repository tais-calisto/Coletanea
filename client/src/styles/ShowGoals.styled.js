import styled from 'styled-components'

export const StyleGoals = styled.section`
  h4 {
    text-align: center;
    padding: 2rem 0 1rem 0;
    color: ${({ theme }) => theme.colors.darkPink};
  }

  li {
    list-style: none;
    border: 1px solid ${({ theme }) => theme.colors.lightPink};
    border-radius: 10px;
    padding: 1rem;
    h5 {
      padding-bottom: 1rem;
    }
    .progress {
      border: 1px solid ${({ theme }) => theme.colors.darkPink};
      border-radius: 10px;
      margin: auto;
      background-color: none;
      .zero {
        color: ${({ theme }) => theme.colors.darkPink};
      }
      .porcentage {
        background-color: ${({ theme }) => theme.colors.darkPink};
        border-radius: 10px;
        height: 20px;
        color: ${({ theme }) => theme.colors.lightPink};
      }
      p {
        font-size: 0.8rem;
        padding-left: 1rem;
      }
    }
    margin-bottom: 2rem;
  }
`

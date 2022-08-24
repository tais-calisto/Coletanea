import styled from 'styled-components'

export const StyledLanding = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  padding: 5rem 0;
  grid-template-rows: 1fr 3fr;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.black};

  header {
    text-align: center;
  }

  main {
    text-align: justify;
    h2 {
      padding-bottom: 2rem;
      font-size: 3rem;
      span {
        color: ${({ theme }) => theme.colors.darkPink};
      }
    }
    h3 {
      padding-bottom: 3rem;
      font-size: 1.5rem;
    }
    a {
      background-color: ${({ theme }) => theme.colors.darkPink};
      border: transparent;
      border-radius: 5px;
      padding: 1rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkPink2};
      }
    }
  }
`

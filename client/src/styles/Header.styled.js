import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 1rem;
  height: 15vh;
  /* background: ${({ theme }) => theme.colors.lightPink}; */
  color: ${({ theme }) => theme.colors.darkPink};
  font-family: monospace;
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightPink};

  div,
  form {
    width: 100%;
    align-items: center;
    display: flex;
  }

  div {
    justify-content: space-around;
    h1 {
      font-size: 2rem;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    i {
      cursor: pointer;
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  form {
    justify-content: center;
    input {
      width: 80%;
      margin: 0 0.5rem;
    }
    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.darkPink};
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: none;
  }
`

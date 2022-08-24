import styled from 'styled-components'

export const StyledRegister = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 10vh;
  text-align: center;
  border: solid 1px ${({ theme }) => theme.colors.lightPink};
  border-top: solid 10px ${({ theme }) => theme.colors.lightPink};
  box-shadow: 3px 3px 10px lightgray;
  border-radius: 10px;

  h1,
  h3,
  form {
    padding-top: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 2rem;
    label {
      font-size: 1.1rem;
      padding-top: 1rem;
      padding-bottom: 0.3rem;
    }
    input {
      width: 100%;
      font-size: 1.1rem;
      padding: 0.3rem;
      border: solid 1px ${({ theme }) => theme.colors.lightPink};
      border-radius: 5px;
    }
  }

  .submit {
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.colors.darkPink};
    border: transparent;
    border-radius: 5px;
    width: 100%;
    margin: 2rem 0;
    padding: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkPink2};
    }
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    button {
      cursor: pointer;
      font-size: 1.1rem;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.darkPink};
      text-decoration: underline;
      &:hover {
        color: ${({ theme }) => theme.colors.darkPink2};
      }
    }
  }
`

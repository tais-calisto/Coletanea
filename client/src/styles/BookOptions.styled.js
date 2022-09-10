import styled from 'styled-components'

export const StyleBookOptions = styled.ul`
  width: 50%;
  margin: 0 auto;
  overflow: hidden;
  button {
    padding-top: 0.5rem;
    background-color: transparent;
    border: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkPink};
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

import styled from 'styled-components'

export const StyleBookOptions = styled.ul`
  width: 50%;
  margin: 0 auto;
  overflow: hidden;
  button {
    padding-top: 0.5rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.darkPink};
    border-radius: 10px;
    width: 100%;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkPink};
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.black};
      border: ${({ theme }) => theme.colors.blck};
    }
  }
`

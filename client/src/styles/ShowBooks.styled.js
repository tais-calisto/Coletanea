import styled from 'styled-components'

export const StyleShowBooks = styled.ul`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  li {
    list-style: none;
    border: 1px solid ${({ theme }) => theme.colors.lightPink};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      scale: 1.05;
      background-color: ${({ theme }) => theme.colors.lightPink};
    }
    button {
      display: flex;
      width: 100%;
      justify-content: end;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.darkPink};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

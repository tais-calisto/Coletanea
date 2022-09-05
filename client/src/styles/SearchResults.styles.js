import styled from 'styled-components'

export const StyleSearchResults = styled.ul`
  overflow: scroll;

  position: relative;
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  display: block;
  top: 18vh;

  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;

  text-align: center;
  scroll-behavior: smooth;

  li {
    list-style: none;
    border: 2px solid ${({ theme }) => theme.colors.lightPink};
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
    width: 80%;
    margin: 0 0 0 250px;
    overflow: hidden;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`

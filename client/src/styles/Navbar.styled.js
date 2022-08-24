import styled from 'styled-components'

export const StyleNavbar = styled.nav`
  .mobile {
    position: relative;
    top: 10vh;
    width: 100%;
    height: fit-content;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightPink};
    padding-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  li {
    list-style: none;
    a {
      text-decoration: none;
    }
  }

  .desktop {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      position: fixed;
      height: 100vh;
      width: 250px;
      top: 15vh;
      border-right: solid 1px ${({ theme }) => theme.colors.lightPink};
      ul {
        padding-left: 1rem;
      }
    }
  }
`

import styled from 'styled-components'

export const StyleNavbar = styled.nav`
  .mobile {
    position: relative;
    top: 10vh;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightPink};
    padding-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      display: none;
    }
    .userSection {
      padding-top: 1rem;
      background-color: ${({ theme }) => theme.colors.lightPink};
      display: flex;
      justify-content: space-around;
      text-transform: capitalize;
      padding-bottom: 1.5rem;
      .userIcon {
        display: flex;
        align-items: center;
      }
      button {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.lightPink};
        padding: 0.5rem;
        border-radius: 3px;
        border: none;
        cursor: pointer;
      }
    }
  }

  a {
    padding-top: 1rem;
    list-style: none;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkPink};
    transition: 0.2s all ease-in-out;

    p {
      display: flex;
      align-items: center;
      i {
        padding-right: 0.2rem;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPink};
    }
  }
  .active {
    background-color: ${({ theme }) => theme.colors.lightPink};
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

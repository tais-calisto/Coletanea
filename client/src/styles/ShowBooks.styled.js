import styled from 'styled-components'

export const StyleShowBooks = styled.ul`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  li {
    padding: 1rem;
    list-style: none;
    border: 1px solid ${({ theme }) => theme.colors.lightPink};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 1px 5px gray;
    &:hover {
      scale: 1.05;
      background-color: ${({ theme }) => theme.colors.lightPink};
      article {
        background-color: ${({ theme }) => theme.colors.darkPink};
        color: ${({ theme }) => theme.colors.lightPink};
      }
      .addButton {
        color: ${({ theme }) => theme.colors.lightPink};
        background-color: ${({ theme }) => theme.colors.darkPink};
      }
    }

    h4 {
      padding-top: 0.5rem;
    }

    .authors {
      padding: 0.5rem 0;
      p {
        padding: 0.5rem;
      }
    }

    article {
      padding: 0.5rem;
      .status {
        text-transform: uppercase;
      }
      font-size: 0.8rem;
      background-color: ${({ theme }) => theme.colors.lightPink};
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.darkPink};
      transition: all 0.2s ease-in-out;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding-top: 1rem;
      button {
        color: ${({ theme }) => theme.colors.darkPink};
        transition: all 0.2s ease-in-out;
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }

    .addButton {
      background-color: ${({ theme }) => theme.colors.lightPink};
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.darkPink};
      transition: all 0.2s ease-in-out;
      border: transparent;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;
      margin: 0 auto;
      padding: 0.5rem;
      cursor: pointer;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    article {
      width: 50%;
      margin: 0 auto;
    }
  }
`

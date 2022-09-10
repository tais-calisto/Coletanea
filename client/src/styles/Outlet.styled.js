import styled from 'styled-components'

export const StyleOutlet = styled.section`
  overflow: scroll;
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  display: block;
  top: 18vh;
  padding: 2rem;
  scroll-behavior: smooth;

  @media screen and (min-width: 1024px) {
    width: 80%;
    margin: 0 0 0 250px;
    overflow: hidden;
    gap: 2rem;
  }
`

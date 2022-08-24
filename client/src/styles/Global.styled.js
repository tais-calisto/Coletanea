import { createGlobalStyle } from 'styled-components'
import '@fontsource/open-sans'
import '@fontsource/pt-mono'

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${({ theme }) => theme.colors.white};
    font-family: "Open Sans", sans-serif; 
    color: ${({ theme }) => theme.colors.black};
}

a {
    text-decoration: none;
}

h1{   
    color: ${({ theme }) => theme.colors.darkPink};
    font-family: "PT Mono", monospace;
    font-size: 2rem;
}
`
export default GlobalStyles

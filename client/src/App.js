import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme.styled'
import GlobalStyles from './styles/Global.styled'
import { AppShell, Error, Register, Landing } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppShell />} />
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

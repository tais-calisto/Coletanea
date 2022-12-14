import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme.styled'
import GlobalStyles from './styles/Global.styled'
import { AppShell, Error, Register, Landing } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './pages/ProtectedRoute'
import BookShelf from './pages/bookShelf/bookShelf'
import SearchResults from './components/searchResults/searchResults'
import Goals from './pages/goals/Goals'
import Readed from './pages/status/Readed'
import Reading from './pages/status/Reading'
import ToRead from './pages/status/ToRead'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }
          >
            <Route index element={<BookShelf />} />
            <Route path='search' element={<SearchResults />} />
            <Route path='goals' element={<Goals />} />
            <Route path='readed' element={<Readed />} />
            <Route path='reading' element={<Reading />} />
            <Route path='toread' element={<ToRead />} />
          </Route>
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

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

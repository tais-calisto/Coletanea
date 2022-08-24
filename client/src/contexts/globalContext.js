import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <AppContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

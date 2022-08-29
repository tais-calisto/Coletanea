import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import SearchResults from '../components/searchResults/searchResults'

const AppShell = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <SearchResults />
    </>
  )
}

export default AppShell

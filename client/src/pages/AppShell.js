import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import SearchResults from '../components/searchResults/searchResults'
import BookShelf from '../components/bookShelf/bookShelf'
import { useSelector } from 'react-redux'

const AppShell = () => {
  const { showShearch } = useSelector((store) => store.appShell)

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {showShearch ? <SearchResults /> : <BookShelf />}
    </>
  )
}

export default AppShell

import React from 'react'
import data from '../../utils/addBooksOptions.json'
import AddBookOption from './addBookOption'
import { StyleBookOptions } from '../../styles/BookOptions.styled'

const AddBookOptions = (bookInfo) => {
  const { options } = data
  return (
    <StyleBookOptions>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <AddBookOption option={option} book={bookInfo} />
          </div>
        )
      })}
    </StyleBookOptions>
  )
}

export default AddBookOptions

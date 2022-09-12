import React from 'react'
import data from '../../utils/addBooksOptions.json'
import AddBookOption from './addBookOption'
import { StyleBookOptions } from '../../styles/BookOptions.styled'

const AddBookOptions = (book) => {
  const { options } = data
  return (
    <StyleBookOptions>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <AddBookOption option={option} {...book} />
          </div>
        )
      })}
    </StyleBookOptions>
  )
}

export default AddBookOptions

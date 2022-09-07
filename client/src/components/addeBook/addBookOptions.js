import React from 'react'

import data from '../../utils/addBooksOptions.json'
import AddBookOption from './addBookOption'

const AddBookOptions = (bookInfo) => {
  const { options } = data
  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <AddBookOption option={option} book={bookInfo} />
          </div>
        )
      })}
    </div>
  )
}

export default AddBookOptions

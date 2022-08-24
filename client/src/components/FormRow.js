import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </>
  )
}

export default FormRow

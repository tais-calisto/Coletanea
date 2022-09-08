import React from 'react'
import { data } from './dataLinks'
import { useDispatch } from 'react-redux'

const NavLinks = () => {
  const dispatch = useDispatch()
  return (
    <ul>
      {data.map((link, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              dispatch(link.handleClick)
            }}
          >
            <p>
              <i>{link.icon}</i>
              {link.name}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks

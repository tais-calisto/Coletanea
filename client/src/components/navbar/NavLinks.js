import React from 'react'
import { data } from './dataLinks'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul>
      {data.map((link, index) => {
        return (
          <NavLink to={link.link} key={index} activeclassname='active'>
            <p>
              <i>{link.icon}</i>
              {link.name}
            </p>
          </NavLink>
        )
      })}
    </ul>
  )
}

export default NavLinks

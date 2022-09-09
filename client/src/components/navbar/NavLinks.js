import React from 'react'
import { data } from './dataLinks'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul>
      {data.map((link, index) => {
        return (
          <Link to={link.link} key={index}>
            <p>
              <i>{link.icon}</i>
              {link.name}
            </p>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavLinks

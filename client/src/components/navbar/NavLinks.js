import React from 'react'
import { data } from './dataLinks'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  const dispatch = useDispatch()
  return (
    <ul>
      {data.map((link, index) => {
        console.log(link)
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

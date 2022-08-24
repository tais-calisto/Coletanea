import React from 'react'
import { IconBooks } from '@tabler/icons'

const NavLinks = () => {
  return (
    <ul>
      <li>
        <a href='/'>
          <p>
            <i>
              <IconBooks />
            </i>
            Estante
          </p>
        </a>
      </li>
    </ul>
  )
}

export default NavLinks

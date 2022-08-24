import React, { useState } from 'react'
import { IconUserCircle, IconChevronDown } from '@tabler/icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../user/userSlice'

const UserIcon = () => {
  const dispach = useDispatch()
  const { user } = useSelector((store) => store.user)
  const [showLogout, setShowLogout] = useState(false)

  return (
    <div className='userIcon'>
      <button
        className='userBtn'
        onClick={() => {
          setShowLogout(!showLogout)
        }}
      >
        <IconUserCircle />
        {user.name}
        <IconChevronDown />
      </button>
      {showLogout && (
        <button
          className='logout'
          onClick={() => {
            dispach(logoutUser())
          }}
        >
          Sair
        </button>
      )}
    </div>
  )
}

export default UserIcon

export const addUserToLS = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLS = (user) => {
  localStorage.removeItem('user')
}

export const getUserFromLS = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

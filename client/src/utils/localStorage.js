export const addUserToLS = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserfromLS = (user) => {
  localStorage.removeItem('user')
}

export const getUserfromLS = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

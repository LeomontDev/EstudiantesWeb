import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()
const AuthUpdateContext = createContext()

export const useUser = () => useContext(AuthContext)
export const useUserUpdate = () => useContext(AuthUpdateContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const updateUser = (newUser) => {
    console.log({ newUser }, 'context')
    setUser(newUser)
  }

  console.log({ user }, 'context')

  return (
    <AuthContext.Provider value={user}>
      <AuthUpdateContext.Provider value={updateUser}>{children}</AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object,
}

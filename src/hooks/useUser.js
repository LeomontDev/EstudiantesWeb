import { useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AuthContext } from 'src/context/AuthContext'

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext)
  const { setItem } = useLocalStorage()

  const addUser = (user) => {
    //console.log({ user })
    setUser(user)
    setItem('user', JSON.stringify(user))
    window.location.href = '#/dashboard'
  }

  const removeUser = () => {
    setUser(null)
    setItem('user', '')
  }

  return { user, addUser, removeUser }
}

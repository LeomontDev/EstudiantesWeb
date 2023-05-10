import { useEffect } from 'react'
import { useUser } from './useUser'
import { useLocalStorage } from './useLocalStorage'
import axios from 'axios'

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser()
  const { getItem } = useLocalStorage()

  useEffect(() => {
    const user = getItem('user')
    if (user) {
      addUser(JSON.parse(user))
    }
  }, [getItem, addUser])

  const login = async (user) => {
    axios({
      method: 'post',
      url: 'https://localhost:7200/usuario/inicio',
      data: user,
    })
      .then((response) => {
        console.log({ response })
        //addUser(user)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const register = (user) => {
    addUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, register, logout }
}

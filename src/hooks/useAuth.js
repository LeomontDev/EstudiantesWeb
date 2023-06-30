import axios from 'axios'
import { useUserUpdate } from 'src/context/AuthContext'

export const useAuth = () => {
  const updateUser = useUserUpdate()

  const login = async (userData) => {
    axios({
      method: 'post',
      url: `https://localhost:7200/usuario/inicio`,
      data: userData,
    })
      .then((response) => {
        console.log(response.data, 'login')
        updateUser(response.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const register = (userData) => {
    axios({
      method: 'post',
      url: `https://localhost:7200/usuario/registro`,
      data: userData,
    })
      .then((response) => {
        updateUser(response.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const logout = () => {
    updateUser(null)
  }

  return { login, register, logout }
}

import React from 'react'
import './scss/style.scss'
import { AuthProvider, useUser } from './context/AuthContext'
import RoutesProvider from './RoutesProvider'

const App = () => {
  return (
    <AuthProvider>
      <RoutesProvider />
    </AuthProvider>
  )
}

export default App

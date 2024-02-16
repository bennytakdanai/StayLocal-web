import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({children}) {
    const {user} = useAuth()
    console.log(user)
  return (
    user ? children : <Navigate to={"/login"}/>
  )
}

export default ProtectedRoute
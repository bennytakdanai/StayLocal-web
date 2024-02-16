import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

function RedirectIfAuth({children}) {
    const {user} = useAuth()
  return (
    user? <Navigate to={'/'} />: children
  )
}

export default RedirectIfAuth
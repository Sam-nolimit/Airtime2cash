import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const UserRoutes = () => {
    const location = useLocation()
    const user = localStorage.getItem('role')

  return user === 'user' ? ( <Outlet /> ) : ( <Navigate to='/login' state={{ from: location }} replace />)
}

export default UserRoutes
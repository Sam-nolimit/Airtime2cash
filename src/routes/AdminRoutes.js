import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  const location = useLocation()
  const user = localStorage.getItem('role')

  return user === 'admin' ? (<Outlet />) : (<Navigate to='/login' state={{ from: location }} replace />)
}

export default AdminRoutes
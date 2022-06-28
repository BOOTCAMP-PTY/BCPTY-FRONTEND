import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../services/store'

export const PrivateRoute: React.FC = () => {
  const { pathname } = useLocation()
  const { isAuthenticated } = useSelector((store: RootState) => store.user)

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ from: pathname }} replace />
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { PrivateRoute } from './PrivateRoute'
import Course from '../pages/Course'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<PrivateRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/curso' element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

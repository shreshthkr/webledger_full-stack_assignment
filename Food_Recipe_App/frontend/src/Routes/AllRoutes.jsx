import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Saved from '../Pages/Saved'
import DetailPage from '../Pages/DetailPage'
import Signup from '../Pages/Signup'
import PrivateRoute from './PrivateRoute';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saved" element={<PrivateRoute><Saved /></PrivateRoute>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/recepie/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default AllRoutes

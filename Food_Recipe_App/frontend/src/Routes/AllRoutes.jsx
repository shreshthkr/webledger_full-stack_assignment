import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Saved from '../Pages/Saved'
import DetailPage from '../Pages/DetailPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route to="/" element={<HomePage />} />
      <Route to="/login" element={<Login />} />
      <Route to="/saved" element={<Saved />}/>
      <Route to="/recepie/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default AllRoutes

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Saved from '../Pages/Saved'
import DetailPage from '../Pages/DetailPage'
import RandomRecepie from '../Pages/RandomRecepie'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saved" element={<Saved />}/>
      <Route path='/random-recepie' element={<RandomRecepie />} />
      <Route path="/recepie/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default AllRoutes

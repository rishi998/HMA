import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
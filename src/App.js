import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import CategoryChoice from './pages/CategoryChoice'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/category' element={<CategoryChoice />} />
      </Routes>
    </>
  )
}

export default App
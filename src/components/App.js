import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'

import './app.scss'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
  )
}

export default App

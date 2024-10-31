import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Necklace from './Pages/Necklace'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/necklaces' element={<Necklace />} />
      </Routes>
    </Router>
  )
}

export default App  

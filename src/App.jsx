import React from 'react'
import Products from './Products'
import LoginDashboard from './LoginDashboard'
import Signup from './Signup'
import {Routes,Route,} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LoginDashboard />}/>
          <Route path="/products" element={<Products />}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
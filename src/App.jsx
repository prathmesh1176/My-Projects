import React from 'react'
import Products from './Products'
import LoginDashboard from './LoginDashboard'
import Signup from './Signup'
import {Routes,Route,Link} from 'react-router-dom'
import Cart from './Cart'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LoginDashboard />}/>
          <Route path="/products" element={<Products />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
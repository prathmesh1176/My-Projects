import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginDashboard = () => {
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')

  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('Username',name);
    console.log('Password',pass);

    if(name==='admin' && pass==='1234'){
      navigate('/products')
    }else{
      alert('Invalid username or password')
    }
    setName('');
    setPass(''); 
  }
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-400 p-4'>
    <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-sm">
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className='flex flex-col items-center mb-4'>
      <div className='flex items-center gap-2'>
          <img src="/login-avatar.png" alt="login" className='w-8 h-8'/>
          <h2 className='text-2xl font-semibold'>
          Login
          </h2>
       </div>
       </div>
        <div className='flex flex-col gap-3 '>
        <input type="text" placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'/>
        <input type="password" placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
        <button type='submit' disabled={!name || !pass} className='bg-blue-500 text-white font-semibold rounded-md p-3 mt-2 hover:bg-blue-600 transition-colors'>Submit</button>
        </div>
        <p className='text-center mt-2 pr-5'>
            Don't have an account?{" "}
            <a className="text-blue-500 font-medium hover:underline" href='/signup'>
              Sign up
            </a>
          </p>
    </form>
    </div>
    </div>
    </>
  )
}

export default LoginDashboard
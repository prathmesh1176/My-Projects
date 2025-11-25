import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6 ">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
    <p className="text-sm">© {new Date().getFullYear()} <b>Prathmesh Patil.</b> Built with 😊 using React.</p>
    <div className="flex gap-4">
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} className="hover:text-blue-400"/>
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} className="hover:text-blue-400"/>
      </a>
      <a href="https://linkedin.com/in/prathmesh-patil-7a0955376/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} className="hover:text-blue-400"/>
      </a>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
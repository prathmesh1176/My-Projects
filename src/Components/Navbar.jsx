import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../Contexts/cartContext";

const Navbar = ({ search, handleSearch, category, selectedCategory, setSelectedCategory }) => {

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <nav className='fixed top-0 right-0 left-0 bg-white shadow-md z-10 flex justify-between items-center px-6 py-3'>
        
        <h1 className='text-2xl text-center font-bold text-blue-800'>Product List</h1>
        
        <div className='flex items-center gap-3'>

          <input 
            type="text" 
            placeholder='Search a product...' 
            value={search} 
            onChange={handleSearch} 
            className='border border-gray-300 rounded-md p-2 focus:outline-none'
          />

          {category && category.length > 0 && (
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            >
              {category.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="flex items-center gap-4 ">

          <Link to="/cart" className="relative text-2xl">
            <GiShoppingCart className='size-8 text-blue'/>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link 
            to='/' 
            className='flex items-center gap-1 text-blue-500 hover:text-gray-300'
          >
            <CiLogin size={20}/>Login
          </Link>

        </div>

      </nav>
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { CartContext } from "../Contexts/cartContext"; 

const ProductCard = ({ product }) => {
  
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
   
  const inCart = cart.find((item) => item.id === product.id);

  const qty = inCart ? inCart.qty : 0;

  return (
    <li className='bg-white rounded-lg p-4 w-60 shadow hover:shadow-xl hover:scale-105 transition duration-200'>
      
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-40 object-cover rounded-md mb-2"
      />

      <h2 className="font-semibold text-lg text-center">{product.title}</h2>

      <div className="flex items-center justify-between mt-3 gap-2">

        <div className="flex items-center gap-2">

          <button 
            onClick={() => removeFromCart(product.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            -
          </button>

          <span className="px-3 py-1 border rounded">
            {qty} 
          </span>

          <button 
            onClick={() => addToCart(product)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            +
          </button>

        </div>

        <p className="text-gray-600">${product.price}</p>
      </div>
    </li>
  );
};

export default ProductCard;

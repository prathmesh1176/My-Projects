import React, { useContext } from "react";
import { CartContext } from "./Contexts/cartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
 
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Your cart is empty 
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      <ul className="space-y-4 ">
        {cart.map((item) => (
          <li 
            key={item.id}   
            className="flex items-center justify-between bg-white p-4 shadow rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded"
              >
                - 
              </button>

              <span className="px-3 py-1 border rounded">{item.qty}</span>

              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="px-3 py-1 bg-gray-700 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="text-right text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "./Contexts/cartContext";

const Cart = ({isOpen,toggleCart}) => {
  const { cart, addToCart, removeFromCart, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
 
  return (
    <>
      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-150 bg-white shadow-2xl z-50 p-6 overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={toggleCart}
          className="mb-4 text-xl font-bold text-red-600"
        >
           Close
        </button>

        {cart.length === 0 ? (
          <div className="flex items-center justify-center h-full text-xl font-semibold">
            Your cart is empty
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded"
                    >
                      -
                    </button>

                    <span className="px-3 py-1 border rounded">{item.qty}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-blue-500 text-white rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-right text-xl font-bold mt-6">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
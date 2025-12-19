import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
        <p className="text-2xl text-slate-600 font-medium">
          🛒 Your cart is empty
        </p>

        <Link
          to="/"
          className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md shadow"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
          Shopping Cart
        </h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        

        {/* Checkout Button */}
        <Link to="/checkout">
          <button className="w-full mt-8 bg-gray-500 hover:bg-gray-700 text-white py-3 rounded-md text-lg shadow">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

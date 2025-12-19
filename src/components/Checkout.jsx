import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    if (name === "" || address === "") {
      alert("Please enter name and address");
      return;
    }

    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          Checkout
        </h2>

        <input
          className="w-full border border-slate-300 p-2 mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border border-slate-300 p-2 mb-4 rounded"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={placeOrder}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

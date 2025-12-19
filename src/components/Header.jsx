// Header navigation component


import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/search/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-bold">
        🛍 ShoppyGlobe
      </Link>

      <input
        className="px-3 py-1 text-black rounded-md w-1/3 bg-white"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <Link to="/cart" className="relative">
        🛒 Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;

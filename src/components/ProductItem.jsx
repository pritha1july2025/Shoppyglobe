import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      <div className="p-5">
        <h3 className="font-semibold text-gray-800 truncate">
          {product.title}
        </h3>

        <p className="text-gray-600 font-bold mt-1">
          ₹{product.price}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-gray-400 text-white px-5 py-1.5 rounded-full text-sm hover:bg-gray-700 transition"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="text-sm text-gray-500 hover:text-indigo-600"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import React from "react";

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const search = useSelector((state) => state.search);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <p className="text-red-600 text-lg font-semibold">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Header Section */}
      <div className="bg-gray-600 text-white text-center py-14 shadow-md">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Welcome to ShoppyGlobe 🛍
        </h1>
        <p className="mt-3 text-indigo-100 text-lg">
          Discover amazing products at unbeatable prices
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
//Improve product list UI
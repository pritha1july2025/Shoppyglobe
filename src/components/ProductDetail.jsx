import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(() => alert("Error fetching product"));
  }, [id]);

  if (!product) return <p className="text-center p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.thumbnail}
        className="w-full h-80 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-3">₹{product.price}</p>
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-center">المنتج غير موجود.</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl text-blue-600 font-semibold">{product.price} ج.م</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            أضف إلى العربة
          </button>
        </div>
      </div>
    </div>
  );
}

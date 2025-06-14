import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">عربة التسوق</h1>
      {cartItems.length === 0 ? (
        <p>عربة التسوق فارغة. <Link to="/" className="text-blue-600">تصفح المنتجات</Link></p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>{item.price} ج.م</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                إزالة
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">
            الإجمالي: {total} ج.م
          </div>
          <div className="text-right">
            <Link
              to="/checkout"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
            >
              متابعة الشراء
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

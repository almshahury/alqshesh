import React from "react";
import products from "../../data/products";

export default function AdminProducts() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">إدارة المنتجات</h2>
      <table className="w-full table-auto bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">المنتج</th>
            <th className="p-2">السعر</th>
            <th className="p-2">التحكم</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.price} ج.م</td>
              <td className="p-2">
                <button className="text-red-500 hover:underline">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

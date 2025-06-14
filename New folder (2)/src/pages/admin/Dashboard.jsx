import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">لوحة تحكم الإدارة</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/products"
          className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition"
        >
          المنتجات
        </Link>
        <Link
          to="/admin/orders"
          className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition"
        >
          الطلبات
        </Link>
        <Link
          to="/admin/users"
          className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg transition"
        >
          المستخدمين
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          القشيشي
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">
            الرئيسية
          </Link>
          <Link to="/cart" className="hover:text-blue-500">
            العربة
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </nav>
  );
}

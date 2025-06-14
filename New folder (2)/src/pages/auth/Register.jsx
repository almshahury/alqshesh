import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h2>
      <form className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
          إنشاء حساب
        </button>
        <p className="text-center text-sm mt-2">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </div>
  );
}

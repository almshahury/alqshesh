import React from "react";

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">الدفع</h1>
      <form className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="العنوان"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="رقم الهاتف"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        >
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}

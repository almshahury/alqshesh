import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} القشيشي - جميع الحقوق محفوظة</p>
    </footer>
  );
}

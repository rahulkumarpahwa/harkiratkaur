import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12 flex flex-col items-center justify-center">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Vote to Harkirat Kaur. All rights
        reserved.
      </div>
      <div className="mt-2 flex gap-4">
        <a
          href="https://wa.me/918219452573"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors text-2xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:8219452573"
          className="hover:text-blue-400 transition-colors text-2xl"
          aria-label="Call"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </footer>
  );
}

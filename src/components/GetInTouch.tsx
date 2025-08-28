"use client";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { useRef } from "react";

export default function GetInTouch() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";
    const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.open(`https://wa.me/918219452573?text=${text}`, "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
        <div className="mb-4 text-center">
          <span className="block text-lg text-white mb-2">Contact us:</span>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                <FaPhoneAlt size={20} />
              </span>
              <a
                href="tel:8219452573"
                className="text-xl font-bold text-blue-400 underline hover:text-blue-300 transition-colors"
              >
                8219452573
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                <FaWhatsapp size={20} />
              </span>
              <a
                href="https://wa.me/918219452573"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-green-400 underline hover:text-green-300 transition-colors"
              >
                8219452573
              </a>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          ref={nameRef}
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          ref={emailRef}
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          ref={messageRef}
          className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="animated-border bg-gray-700 text-white font-bold py-3 rounded-lg mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

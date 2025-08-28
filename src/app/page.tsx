"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Vision from "@/components/Vision";
import { useRef } from "react";
import Card from "@/components/Card";
import OurPoster from "@/components/OurPoster";

import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  const visionRef = useRef<HTMLDivElement>(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if user has scrolled past the hero section (arbitrary: 600px)
      setShowFloating(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Typewriter effect for 'Harkirat Kaur'
  const [typed, setTyped] = useState("");
  const [show, setShow] = useState(true);
  const fullText = "Harkirat Kaur";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (show && typed.length < fullText.length) {
      timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, 120);
    } else if (!show) {
      setTyped("");
    }
    return () => clearTimeout(timeout);
  }, [typed, show]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (show) setTyped("");
  }, [show]);

  return (
    <>
      <div className="main-bg flex flex-col min-h-screen p-8 gap-8">
        {/* Left: Animated Show/Hide Text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: Animated Show/Hide Text */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center md:items-start">
              <span
                className={`block text-4xl md:text-7xl font-extrabold text-foreground mb-4 h-16 transition-opacity duration-500 ${
                  show ? "opacity-100" : "opacity-0"
                }`}
                style={{ fontFamily: "monospace, var(--font-sans)" }}
              >
                {typed}
                <span
                  className="inline-block w-2 h-8 bg-foreground align-middle animate-pulse ml-1"
                  style={{ verticalAlign: "middle" }}
                ></span>
              </span>
              <h1 className="text-5xl font-extrabold text-foreground text-center md:text-left animate-showhide">
                Your Voice, My Passion!
              </h1>
              <span className="text-2xl font-semibold text-foreground mt-4 block text-center md:text-left">
                - Let&apos;s Build Our Department Together!
              </span>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSev5HNyIA6DIC3EqShVl3pNT54a_xd440qISJ3PyKZpDb6yMw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 px-8 py-3 text-lg font-bold rounded-lg bg-gray-700 text-white overflow-hidden z-0 animated-border flex items-center justify-center"
                style={{ isolation: "isolate" }}
              >
                <span className="relative z-10">Click to Support!</span>
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Voice Passion"
              width={500}
              height={500}
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
        {/* Vision Section */}
        <div ref={visionRef} className="mt-20 w-full flex justify-center">
          <Vision />
        </div>
        {/* Floating Support Button */}
        {showFloating && (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSev5HNyIA6DIC3EqShVl3pNT54a_xd440qISJ3PyKZpDb6yMw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-8 bottom-8 z-50 px-8 py-3 text-lg font-bold rounded-lg bg-gray-700 text-white overflow-hidden animated-border flex items-center justify-center"
            style={{ isolation: "isolate" }}
          >
            <span className="relative z-10">Click to Support!</span>
          </a>
        )}
        {/* Commitments Section */}
        <div className="mt-20 w-full flex justify-center">
          <Card />
        </div>
        {/* Our Poster Section */}
        <div className="mt-20 w-full flex justify-center">
          <OurPoster />
        </div>
        {/* Get In Touch Section */}
        <div className="mt-20 w-full flex justify-center">
          <GetInTouch />
        </div>
      </div>
      <Footer />
    </>
  );
}

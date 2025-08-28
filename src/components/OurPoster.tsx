"use client";

import Image from "next/image";

export default function OurPoster() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
        Our Poster
      </h2>
      <div className="w-full flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSev5HNyIA6DIC3EqShVl3pNT54a_xd440qISJ3PyKZpDb6yMw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Support Harkirat Kaur via Poster"
        >
          <Image
            src="/poster.jpg"
            alt="Our Poster"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl object-contain hover:opacity-80 transition-opacity"
            priority
          />
        </a>
      </div>
    </section>
  );
}

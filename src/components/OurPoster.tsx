"use client";

import Image from "next/image";

export default function OurPoster() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
        Our Poster
      </h2>
      <div className="w-full flex justify-center">
        <Image
          src="/poster.jpg"
          alt="Our Poster"
          width={500}
          height={400}
          className="rounded-2xl shadow-2xl object-contain"
          priority
        />
      </div>
    </section>
  );
}

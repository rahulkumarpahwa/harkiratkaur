"use client";

import copowered from "@/utils/copowered.json";
import Image from "next/image";

export default function CoPoweredBy() {
  // Data from copowered.json
  const cards = copowered as Array<{
    id: number;
    image: string;
    link: string;
  }>;

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center">
        Co Powered By
      </h2>
      <div className="relative overflow-x-hidden">
        <div
          className="flex gap-8 animate-horizontal-scroll py-4 justify-center"
          style={{ minWidth: "700px" }}
        >
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] max-w-[350px] bg-gray-800 text-white rounded-2xl p-8 shadow-2xl flex flex-col gap-3 animated-border items-center justify-center hover:opacity-80 transition-opacity"
              aria-label={`Co Powered By Partner ${card.id}`}
            >
              <Image
                src={card.image}
                alt={`Co Powered By Partner ${card.id}`}
                width={200}
                height={120}
                className="rounded-xl object-contain mb-4"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

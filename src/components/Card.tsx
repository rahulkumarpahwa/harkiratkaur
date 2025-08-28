"use client";
import commitments from "@/utils/commitments.json";

export default function Card() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 text-center">
        Commitments
      </h2>
      <div className="relative overflow-x-auto">
        <div
          className="flex gap-10 animate-horizontal-scroll py-4"
          style={{ minWidth: "1200px" }}
        >
          {Object.entries(commitments).map(([title, points]) => (
            <div
              key={title}
              className="min-w-[400px] max-w-[500px] bg-gray-800 text-white rounded-2xl p-10 shadow-2xl flex flex-col gap-5 animated-border"
            >
              <h3 className="text-3xl font-bold mb-2 text-center">{title}</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                {(points as string[]).map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

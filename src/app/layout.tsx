import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harkirat Kaur - Department Representative, DCSA",
  description:
    "Official website of Harkirat Kaur, Department Representative, DCSA. Empowering every voice, bridging gaps, and driving opportunities for growth, well-being, and innovation.",
  keywords: [
    "Harkirat Kaur",
    "Department Representative",
    "Student Leadership",
    "Empowering Voices",
    "Innovation",
    "Well-being",
    "Mentorship",
    "Community Building", 
    "DCSA"
  ],
  authors: [{ name: "Harkirat Kaur" }],
  creator: "Harkirat Kaur",
  publisher: "Department Representation-DCSA",
  openGraph: {
    title: "Harkirat Kaur - Department Representative",
    description:
      "Empowering every voice, elevating our collective potential. Discover initiatives, opportunities, and leadership by Harkirat Kaur.",
    url: "https://harkiratkaur.netlify.app/",
    siteName: "Harkirat Kaur | Department Representative",
    images: [
      {
        url: "https://harkiratkaur.netlify.app/",
        width: 1200,
        height: 630,
        alt: "Harkirat Kaur - Department Representative"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harkirat Kaur - Department Representative",
    description:
      "Empowering every voice, building legacy, and fostering innovation. Learn more about Harkirat Kaur’s vision.",
    images: ["https://harkiratkaur.netlify.app/"],
    creator: "@rahulkumar"
  },
  metadataBase: new URL("https://harkiratkaur.netlify.app/"),
  alternates: {
    canonical: "https://harkiratkaur.netlify.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          style={{ background: "#0094d4" }}
          className="w-full text-foreground py-2 overflow-hidden relative flex items-center justify-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSev5HNyIA6DIC3EqShVl3pNT54a_xd440qISJ3PyKZpDb6yMw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap animate-marquee font-bold text-lg text-center"
            aria-label="Support Harkirat Kaur"
          >
            Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for
            Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat
            Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur
            &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp;
            Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for
            Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat
            Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur
            &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp;
            Vote for Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for
            Harkirat Kaur &nbsp; Vote for Harkirat Kaur &nbsp; Vote for Harkirat
            Kaur &nbsp; Vote for Harkirat Kaur
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}

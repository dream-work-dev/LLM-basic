import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Daniel Morgan",
    "Portfolio",
    "Senior Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Payments",
    "Dublin",
    "Ireland",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} min-h-full bg-[#0e1320] font-sans text-white antialiased`}
      >
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#162032",
              color: "#fff",
              border: "1px solid rgba(168, 85, 247, 0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}

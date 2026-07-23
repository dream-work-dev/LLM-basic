"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hidden sm:block fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <nav className="flex items-center gap-1 rounded-full border border-gray-700/60 bg-[#101825]/80 px-2 py-2 backdrop-blur-md">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                    : "text-gray-300 hover:bg-blue-800/40 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <MobileNav activeSection={activeSection} />
    </>
  );
}

function MobileNav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 sm:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-purple-700 text-2xl text-white shadow-lg"
      >
        ☰
      </button>

      <div
        className={`fixed right-1 bottom-20 flex flex-col gap-2 rounded-xl border border-gray-700/50 bg-[#101825]/90 p-2 shadow-xl backdrop-blur-sm transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        {navLinks.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-2 ${
                isActive
                  ? "bg-purple-700/30 text-white"
                  : "text-gray-200 hover:bg-blue-800"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

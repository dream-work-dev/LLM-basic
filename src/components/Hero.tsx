"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroContent, siteConfig } from "@/data/portfolio";
import GridBackground from "./GridBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0e1320] px-6 pt-24 pb-16 text-white sm:overflow-visible"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left"
        >
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {heroContent.headline}
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-semibold text-transparent">
              Daniel Morgan
            </span>
            . {heroContent.intro}
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {heroContent.roleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8 flex items-center gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-[#101825] text-xl text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all hover:scale-110 hover:border-purple-400"
            >
              <FaGithub />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-[#101825] text-xl text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all hover:scale-110 hover:border-purple-400"
            >
              <FaLinkedin />
            </Link>
          </div>

          <Link
            href="#contact"
            className="rounded-xl bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative flex w-full items-center justify-center lg:w-[40%]"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-[40%_60%_55%_45%/55%_45%_55%_45%] border-2 border-white/20 bg-gradient-to-br from-[#1a2540] to-[#101825] shadow-2xl sm:h-80 sm:w-80">
              <div className="text-center">
                <div className="mb-3 text-6xl font-black tracking-tight text-white sm:text-7xl">
                  DM
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-300">
                  Daniel Morgan
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

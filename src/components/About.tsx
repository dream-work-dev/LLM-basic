"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex w-full flex-col items-center bg-[#101825] px-6 py-14 lg:px-16 lg:py-20"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-10">
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Get to know me
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <div className="relative rounded-3xl border border-gray-800 bg-[#162032] p-8 shadow-lg transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <span className="pointer-events-none absolute -left-2 -top-6 font-serif text-6xl text-purple-500/20">
              &ldquo;
            </span>
            <p className="relative z-10 text-base font-medium leading-relaxed text-gray-300 lg:text-lg">
              {aboutContent.summary}
            </p>
            <div className="my-6 h-px w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-50" />
            <div className="flex flex-wrap gap-3">
              {aboutContent.tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 shadow-sm transition-colors hover:bg-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

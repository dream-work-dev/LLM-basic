"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function ExperienceCard({
  post,
  companyName,
  mode,
  location,
  startDate,
  endDate,
  logoText,
  logoColor,
  description,
}: (typeof experiences)[number]) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="group relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#162032] p-[1px] shadow-lg transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full w-full flex-col gap-6 rounded-3xl border border-gray-800 bg-[#162032] p-6 transition-colors duration-500 group-hover:border-purple-500/30 lg:p-8">
        <div className="flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <div
              className={`relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br ${logoColor} text-sm font-bold text-white shadow-md`}
            >
              {logoText}
            </div>
            <div className="flex flex-col">
              <h3 className="flex flex-wrap items-center gap-3 text-xl font-bold tracking-tight text-white lg:text-2xl">
                {post}
                <span className="whitespace-nowrap rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                  {mode}
                </span>
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-400">
                {companyName}
              </p>
            </div>
          </div>

          <div className="mt-2 flex flex-shrink-0 flex-col sm:mt-0 sm:text-right">
            <span className="inline-block rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-gray-300 lg:text-base">
              {startDate} - {endDate}
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm text-gray-500 sm:justify-end">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-50" />

        <ul className="space-y-3 text-[15px] leading-relaxed text-gray-300 lg:text-base">
          {description.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 flex-shrink-0 text-purple-500">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="transition-colors duration-300 group-hover:text-gray-200">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center bg-[#101825] px-6 py-14 lg:px-16 lg:py-20"
    >
      <div className="flex w-full max-w-6xl flex-col gap-10">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.companyName}-${experience.post}`} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

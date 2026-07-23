"use client";

import { motion } from "framer-motion";
import { achievements, skillGroups } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex w-full flex-col items-center bg-[#0e1320] px-6 py-14 lg:px-16 lg:py-20"
    >
      <div className="flex w-full max-w-6xl flex-col gap-12">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="rounded-3xl border border-gray-800 bg-[#162032] p-6 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 bg-[#101825] px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="mb-6 text-center text-3xl font-extrabold text-white">
            Highlights
          </h3>
          <div className="rounded-3xl border border-gray-800 bg-[#162032] p-8">
            <ul className="space-y-4">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
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
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0e1320] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link
          href="#home"
          className="text-lg font-bold text-white transition-colors hover:text-purple-400"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-gray-400 transition-colors hover:text-purple-400"
          >
            <FaGithub />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-gray-400 transition-colors hover:text-purple-400"
          >
            <FaLinkedin />
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

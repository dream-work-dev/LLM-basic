"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin, FaSpinner } from "react-icons/fa";
import { siteConfig } from "@/data/portfolio";

type FormState = {
  email: string;
  subject: string;
  description: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    email: "",
    subject: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const body = `From: ${form.email}\n\n${form.description}`;
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    setForm({ email: "", subject: "", description: "" });
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-[#0e1320] px-4 py-10 lg:py-20"
    >
      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-gray-800 bg-[#162032] shadow-2xl lg:w-[85%] lg:flex-row">
        <div className="relative flex flex-col items-center justify-center overflow-hidden border-b border-gray-800 bg-gradient-to-br from-purple-900/30 to-[#101825] p-8 lg:w-[45%] lg:border-b-0 lg:border-r lg:p-12">
          <div className="absolute left-[-20%] top-[-20%] h-72 w-72 rounded-full bg-purple-600 opacity-30 mix-blend-multiply blur-[100px] filter" />
          <div className="absolute bottom-[-20%] right-[-20%] h-72 w-72 rounded-full bg-blue-600 opacity-30 mix-blend-multiply blur-[100px] filter" />

          <div className="z-10 flex w-full flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              Let&apos;s Connect
            </h2>
            <p className="mb-8 font-light text-gray-400">
              I&apos;m open to new opportunities. Whether you have a question or
              just want to say hi, I&apos;ll try my best to get back to you.
            </p>

            <div className="mb-10 rounded-full border border-purple-500/30 bg-[#0e1320] p-6 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <FaEnvelope size={60} className="-rotate-12 translate-x-[-2px] translate-y-[2px] transform" />
            </div>

            <div className="flex w-full flex-col gap-4 rounded-2xl border border-gray-800/50 bg-[#101825]/50 p-6 text-left">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-500/20 p-3 text-purple-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email me at</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-white transition-colors hover:text-purple-400"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-500/20 p-3 text-purple-400">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Connect on LinkedIn</p>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white transition-colors hover:text-purple-400"
                  >
                    Daniel Morgan
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-500/20 p-3 text-purple-400">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">View my GitHub</p>
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white transition-colors hover:text-purple-400"
                  >
                    skydragon0324
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#162032] p-8 lg:w-[55%] lg:p-12">
          <h3 className="mb-6 text-2xl font-bold text-white">Send me a message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={siteConfig.email}
                className="block w-full rounded-xl border border-gray-700 bg-[#0e1320] p-4 text-sm text-white transition-colors placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Let us know how we can help you"
                className="block w-full rounded-xl border border-gray-700 bg-[#0e1320] p-4 text-sm text-white transition-colors placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                value={form.description}
                onChange={handleChange}
                placeholder="Leave a comment..."
                className="block w-full resize-none rounded-xl border border-gray-700 bg-[#0e1320] p-4 text-sm text-white transition-colors placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-colors hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-3">
                  Sending Message <FaSpinner className="animate-spin" size={20} />
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

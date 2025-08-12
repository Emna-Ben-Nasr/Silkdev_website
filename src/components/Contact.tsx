"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission (API call, etc.)
    setSubmitted(true);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] py-24 px-4">
      <div className="w-full max-w-2xl bg-color-[#9dd5bf] text-[#1D1F34] rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">Let&apos;s work together !</h2>
        <p className="text-[#F8F8F9]/80 mb-8 text-center">
          Have a question, project, or just want to say hello? Fill out the form below!
        </p>
        {submitted ? (
          <div className="text-center text-[#7ED6A7] text-2xl font-bold py-12">
            Thank you for reaching out!<br />We’ll get back to you soon.
          </div>
        ) : (
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="rounded-xl px-5 py-3 bg-white/80 text-[#1D1F34] placeholder-[#163C53]/60 font-medium focus:outline-none focus:ring-2 focus:ring-[#7ED6A7] transition"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="rounded-xl px-5 py-3 bg-white/80 text-[#1D1F34] placeholder-[#163C53]/60 font-medium focus:outline-none focus:ring-2 focus:ring-[#7ED6A7] transition"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="rounded-xl px-5 py-3 bg-white/80 text-[#1D1F34] placeholder-[#163C53]/60 font-medium focus:outline-none focus:ring-2 focus:ring-[#7ED6A7] transition resize-none"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#9dd5bf]/90 text-[#1D1F34] font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Let's build something great together!
      </p>

      <form
        action="https://formsubmit.co/dev.rabelo@gmail.com"
        method="POST"
        className="space-y-6">
        <input
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          placeholder="Your message"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
        <input type="hidden" name="_captcha" value="false" />
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.section>
  );
}
import { useState } from 'react';

/** Contact section with simple form */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit action
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact</h2>
      <p className="text-center mb-4">Email: example@example.com</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded dark:border-gray-700"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded dark:border-gray-700"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 border rounded dark:border-gray-700"
          name="message"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}

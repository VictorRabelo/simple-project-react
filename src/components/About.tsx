import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400 leading-8 tracking-wide">
        I'm a <span className="font-semibold text-gray-800 dark:text-white">senior full-stack developer</span> with{" "}
        <span className="text-blue-400">7+ years of experience</span> creating scalable web and
        mobile applications using{" "}
        <span className="text-purple-400">Angular, Ionic, React, C#, Java, Kotlin, Flutter, PHP</span>, and{" "}
        <span className="text-pink-400">Oracle SQL</span>.
        <br /><br />
        Passionate about clean code and delightful user experiences, I’ve worked on impactful
        solutions across diverse industries. I'm fluent in English and thrive in
        international collaboration.
        <br /><br />
        My background in <span className="text-yellow-400">mobile development</span> with Ionic and Flutter
        enables me to build cross-platform apps that deliver real value. I'm always learning,
        growing, and aiming to leave a meaningful mark through technology.
      </p>
    </motion.section>
  );
}

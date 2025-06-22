import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center space-y-4"
      >
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg"
        >
          <span className="typewriter">Hello, I'm Victor Rabelo</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
        >
          Senior Full-Stack Developer who builds magic with code ✨
        </motion.p>

        <motion.div variants={item}>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

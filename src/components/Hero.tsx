import { motion } from 'framer-motion';

/** Hero section with animated greeting */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h1>
        <p className="text-xl">Senior Full-Stack Developer</p>
      </motion.div>
    </section>
  );
}

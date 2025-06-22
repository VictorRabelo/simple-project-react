import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="text-left">
            <h3 className="text-xl font-semibold mb-3 capitalize text-gray-800 dark:text-gray-200">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full text-sm shadow-sm hover:scale-105 transition-transform"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
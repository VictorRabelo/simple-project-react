import { projects } from '../data/projects';
import { motion } from 'framer-motion';

/** Projects section with featured projects */
export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.02 }}
            className="border p-4 rounded shadow-sm dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="mb-2 text-sm text-gray-500">
              Tech: {project.tech.join(', ')}
            </p>
            <div className="flex gap-4">
              <a href={project.live} className="text-blue-600 hover:underline">
                Live
              </a>
              <a href={project.repo} className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

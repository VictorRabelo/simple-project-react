import { skills } from '../data/skills';

/** Skills section with categorized tags */
export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-medium capitalize mb-2">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Marquee } from "@/components/ui/marquee"

const technologies = [
  "TensorFlow",
  "PyTorch", 
  "OpenAI",
  "Hugging Face",
  "Scikit-Learn",
  "Keras",
  "Pandas",
  "NumPy",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "JavaScript",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
  "Redis"
];

export function MarqueeDemo() {
  return (
    <Marquee speed={20}>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-center whitespace-nowrap"
        >
          <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
            {tech}
          </span>
        </div>
      ))}
    </Marquee>
  )
}

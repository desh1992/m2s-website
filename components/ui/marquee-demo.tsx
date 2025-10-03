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
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-[2rem] flex items-center justify-center whitespace-nowrap flex-shrink-0"
          >
            <div className="gradient-button rounded-full px-6 py-3 text-white font-semibold text-lg">
              {tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

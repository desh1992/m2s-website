import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const developmentTechnologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Spring Boot",
  "Laravel",
  "Ruby on Rails",
  "ASP.NET",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "GraphQL",
  "REST API",
  "Microservices",
  "Serverless",
  "CI/CD",
  "Git",
  "GitHub",
  "GitLab",
  "Jenkins",
  "Terraform"
];

export function CustomDevelopmentMarqueeDemo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...developmentTechnologies, ...developmentTechnologies, ...developmentTechnologies].map((tech, index) => (
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

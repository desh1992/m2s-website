import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const healthcareTechnologies = [
  "Epic",
  "Cerner",
  "Allscripts",
  "NextGen",
  "eClinicalWorks",
  "athenahealth",
  "Meditech",
  "InterSystems",
  "Oracle Health",
  "Microsoft Health",
  "AWS Healthcare",
  "Google Cloud Healthcare",
  "IBM Watson Health",
  "SAP Healthcare",
  "Salesforce Health Cloud",
  "Dell Healthcare",
  "Intel Healthcare",
  "NVIDIA Healthcare",
  "Philips Healthcare",
  "GE Healthcare"
];

export function HealthcareMarqueeDemo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...healthcareTechnologies, ...healthcareTechnologies, ...healthcareTechnologies].map((tech, index) => (
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

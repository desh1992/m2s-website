import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const strategicTechnologies = [
  "Tableau",
  "Power BI",
  "Qlik Sense",
  "Looker",
  "Domo",
  "Sisense",
  "MicroStrategy",
  "SAP Analytics Cloud",
  "Oracle Analytics",
  "IBM Cognos",
  "Salesforce Einstein",
  "Microsoft Dynamics",
  "HubSpot",
  "Marketo",
  "Adobe Analytics",
  "Google Analytics",
  "Mixpanel",
  "Amplitude",
  "Segment",
  "Snowflake"
];

export function StrategicMarqueeDemo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...strategicTechnologies, ...strategicTechnologies, ...strategicTechnologies].map((tech, index) => (
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

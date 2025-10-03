import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const governmentTechnologies = [
  "Microsoft Azure Government",
  "AWS GovCloud",
  "Google Cloud Government",
  "Salesforce Government Cloud",
  "ServiceNow Government",
  "Oracle Government Cloud",
  "IBM Government Solutions",
  "Dell Government",
  "Cisco Government",
  "VMware Government",
  "Red Hat Government",
  "Splunk Government",
  "Palantir Government",
  "Tableau Government",
  "Power BI Government",
  "SharePoint Government",
  "Office 365 Government",
  "Teams Government",
  "Zoom Government",
  "Slack Government"
];

export function GovernmentMarqueeDemo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...governmentTechnologies, ...governmentTechnologies, ...governmentTechnologies].map((tech, index) => (
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

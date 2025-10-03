import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const cybersecurityTechnologies = [
  "CrowdStrike",
  "Palo Alto Networks",
  "Fortinet",
  "Cisco Security",
  "Microsoft Defender",
  "Symantec",
  "McAfee",
  "Trend Micro",
  "Kaspersky",
  "Bitdefender",
  "FireEye",
  "Splunk",
  "IBM Security",
  "Rapid7",
  "Tenable",
  "Qualys",
  "Nessus",
  "Wireshark",
  "Nmap",
  "Burp Suite"
];

export function CybersecurityMarqueeDemo() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...cybersecurityTechnologies, ...cybersecurityTechnologies, ...cybersecurityTechnologies].map((tech, index) => (
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

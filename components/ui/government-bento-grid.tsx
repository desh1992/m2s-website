import { Building2, Shield, Database, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

function GovernmentFeature() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-2 flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular">
                Advanced Government Solutions
              </h2>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight text-muted-foreground">
                Secure, compliant, and efficient IT services designed specifically for government operations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#3B82F6", "#60A5FA", "#93C5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Custom Government Software</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Tailored applications for public sector needs, enhancing efficiency and service delivery.
                  </p>
                </div>
                <Building2 className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#10B981", "#34D399", "#6EE7B7"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Data Management</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Secure and insightful management of public data for informed decision-making.
                  </p>
                </div>
                <Database className="w-8 h-8 stroke-1" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#EF4444", "#F87171", "#FCA5A5"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Cybersecurity</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Robust protection and adherence to government standards like NIST and FedRAMP.
                  </p>
                </div>
                <Shield className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#8B5CF6", "#A78BFA", "#C4B5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Citizen Engagement</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    User-friendly portals to improve interaction between government and citizens.
                  </p>
                </div>
                <Users className="w-8 h-8 stroke-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GovernmentFeature };

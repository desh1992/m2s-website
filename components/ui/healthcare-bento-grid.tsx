import { Heart, Activity, FileText, TrendingUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

function HealthcareFeature() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-2 flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular">
                Advanced Healthcare Solutions
              </h2>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight text-muted-foreground">
                Transform healthcare delivery with cutting-edge technology and innovative solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#EF4444", "#F87171", "#FCA5A5"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">AI-Powered Diagnostics</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Machine learning models for predictive care and early disease detection.
                  </p>
                </div>
                <Heart className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#10B981", "#34D399", "#6EE7B7"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Patient Monitoring</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Real-time health monitoring with intelligent alert systems.
                  </p>
                </div>
                <Activity className="w-8 h-8 stroke-1" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#3B82F6", "#60A5FA", "#93C5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">EHR Integration</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Seamless electronic health record management and optimization.
                  </p>
                </div>
                <FileText className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#8B5CF6", "#A78BFA", "#C4B5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Predictive Analytics</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Data-driven insights for improved patient outcomes and operational efficiency.
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 stroke-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HealthcareFeature };

import { Brain, Sparkles, Lightbulb, Database, Cpu, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

function Feature() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-2 flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular">
                Advanced AI Solutions
              </h2>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight text-muted-foreground">
                Transform your business with cutting-edge artificial intelligence and machine learning technologies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#3B82F6", "#60A5FA", "#93C5FD"]} speed={0.05} blur="medium" />
                  <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                    <div className="flex flex-col">
                      <h3 className="text-2xl tracking-tight">Custom AI Models</h3>
                      <p className="text-muted-foreground max-w-xs text-lg">
                        Bespoke AI models tailored to your specific business challenges and data requirements.
                      </p>
                    </div>
                    <Brain className="w-8 h-8 stroke-1" />
                  </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#60A5FA", "#34D399", "#93C5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">RAG-Based Intelligence</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Retrieval-Augmented Generation AI for accurate, context-aware business insights.
                  </p>
                </div>
                <Sparkles className="w-8 h-8 stroke-1" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#F59E0B", "#A78BFA", "#FCD34D"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Machine Learning Solutions</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Advanced ML algorithms for predictive analytics and automated decision-making.
                  </p>
                </div>
                <Lightbulb className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#3B82F6", "#A78BFA", "#FBCFE8"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Data Science Services</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Comprehensive data analysis and modeling for actionable business intelligence.
                  </p>
                </div>
                <Database className="w-8 h-8 stroke-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

import { TrendingUp, Target, BarChart3, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

function StrategicFeature() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-2 flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular">
                Advanced Strategic Solutions
              </h2>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight text-muted-foreground">
                Harness the power of RAG-based AI and net assessment methodology for unparalleled competitive advantage and strategic insights.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#F59E0B", "#FBBF24", "#FCD34D"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Net Assessment Strategy</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Comprehensive competitive analysis and strategic positioning using proven net assessment methodology.
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#3B82F6", "#60A5FA", "#93C5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">RAG-Based Intelligence</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Advanced AI-powered business intelligence that combines real-time data with historical insights.
                  </p>
                </div>
                <Target className="w-8 h-8 stroke-1" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 aspect-[3/2] flex justify-between flex-col">
              <AnimatedGradient colors={["#10B981", "#34D399", "#6EE7B7"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Market Analysis</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    Deep market research and competitive intelligence to inform strategic decision-making.
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 stroke-1" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-gray-300/60 dark:border-gray-600/60 lg:col-span-2 aspect-[3/2] lg:aspect-auto flex justify-between flex-col">
              <AnimatedGradient colors={["#8B5CF6", "#A78BFA", "#C4B5FD"]} speed={0.05} blur="medium" />
              <div className="relative z-10 p-4 text-foreground backdrop-blur-sm flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h3 className="text-2xl tracking-tight">Strategic Planning</h3>
                  <p className="text-muted-foreground max-w-xs text-lg">
                    End-to-end strategic planning services to help organizations achieve their long-term goals.
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

export { StrategicFeature };

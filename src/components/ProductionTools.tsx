import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, Mic2, AudioWaveform, ArrowRight } from "lucide-react";

const tools = [
  {
    name: "BandLab Studio",
    description: "Professional music production suite",
    icon: Music2,
    link: "/fan/bandlab"
  },
  {
    name: "Beat Marketplace",
    description: "Find and purchase beats from top producers",
    icon: AudioWaveform,
    link: "/fan/beats"
  },
  {
    name: "Recording Studio",
    description: "High-quality audio recording tools",
    icon: Mic2,
    link: "/fan/studio"
  }
];

export const ProductionTools = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Production Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Card 
              key={tool.name}
              className="bg-[#2A2B2E] border-none p-6 hover:bg-[#3A3B3E] transition-colors group"
            >
              <Icon className="h-8 w-8 text-[#4F46E5] mb-4" />
              <h3 className="font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-white/70 mb-4">{tool.description}</p>
              <Button 
                variant="ghost" 
                className="group-hover:translate-x-2 transition-transform"
                asChild
              >
                <a href={tool.link}>
                  Try Now <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
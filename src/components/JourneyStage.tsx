import { cn } from "@/lib/utils";
import { JourneyCard } from "./JourneyCard";

interface JourneyStageProps {
  title: string;
  color: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export const JourneyStage = ({ title, color, items }: JourneyStageProps) => {
  return (
    <div className="min-w-[350px] px-4">
      <h2 className={cn("text-lg font-bold mb-4 p-2 rounded", color)}>{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <JourneyCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
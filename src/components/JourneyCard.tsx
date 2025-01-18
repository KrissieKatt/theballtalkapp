import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JourneyCardProps {
  title: string;
  description: string;
  className?: string;
}

export const JourneyCard = ({ title, description, className }: JourneyCardProps) => {
  return (
    <Card className={cn("w-[300px] p-4 hover:shadow-lg transition-shadow", className)}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
};
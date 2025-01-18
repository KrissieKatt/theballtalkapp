import { JourneyStage } from "@/components/JourneyStage";

const journeyData = [
  {
    title: "STAGE",
    color: "bg-stage-blue/20",
    items: [
      {
        title: "Athlete Journey - Verification",
        description: "Upload identification documents, Submit league affiliation, Complete profile setup",
      },
      {
        title: "Athlete Journey - Music Creation",
        description: "Access DAW interface, Browse beat library, Record tracks, Collaborate with others",
      },
    ],
  },
  {
    title: "ACTIONS",
    color: "bg-stage-green/20",
    items: [
      {
        title: "Document Upload",
        description: "Mobile/Web verification portal, Document upload interface, Profile creation form",
      },
      {
        title: "Music Production",
        description: "DAW workspace, Beat library, Recording interface, Collaboration tools",
      },
    ],
  },
  {
    title: "TOUCHPOINTS",
    color: "bg-stage-yellow/20",
    items: [
      {
        title: "Platform Access",
        description: "Anticipation of platform access, Concern about privacy, Professional recognition",
      },
      {
        title: "Creative Process",
        description: "Creative freedom, Professional capability, Collaborative excitement",
      },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Customer Journey Map</h1>
      <div className="overflow-x-auto">
        <div className="flex gap-8 min-w-max pb-8">
          {journeyData.map((stage, index) => (
            <JourneyStage
              key={index}
              title={stage.title}
              color={stage.color}
              items={stage.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
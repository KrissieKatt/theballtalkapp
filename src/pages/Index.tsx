import { JourneyStage } from "@/components/JourneyStage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const stages = [
    {
      title: "Stage",
      color: "bg-stage-blue/20",
      items: [
        {
          title: "Athlete Journey - Verification",
          description: "Upload identification documents, Submit league affiliation, Complete profile setup"
        },
        {
          title: "Athlete Journey - Music Creation",
          description: "Access DAW interface, Browse beat library, Record tracks, Collaborate with others"
        },
        {
          title: "User Journey - Registration",
          description: "Sign up via email/social, Create profile, Set preferences"
        }
      ]
    },
    {
      title: "Actions",
      color: "bg-stage-green/20",
      items: [
        {
          title: "Content Management",
          description: "Upload finished tracks, Schedule releases, Create previews, Set distribution options"
        },
        {
          title: "Community & Revenue",
          description: "Monitor earnings, Engage with fans, Track analytics, Manage subscriptions"
        }
      ]
    },
    {
      title: "Touchpoints",
      color: "bg-stage-yellow/20",
      items: [
        {
          title: "Mobile/Web Verification",
          description: "Document upload interface, Profile creation form"
        },
        {
          title: "DAW Workspace",
          description: "Beat library, Recording interface, Collaboration tools"
        }
      ]
    },
    {
      title: "Pain Points",
      color: "bg-stage-orange/20",
      items: [
        {
          title: "Time-consuming Process",
          description: "Multiple document requirements, Complex validation steps"
        },
        {
          title: "Learning Curve",
          description: "DAW familiarization, Finding right beats, Coordination with collaborators"
        }
      ]
    },
    {
      title: "Opportunities",
      color: "bg-stage-pink/20",
      items: [
        {
          title: "Streamlined Verification",
          description: "League partnership integration, Auto-verification features"
        },
        {
          title: "In-app Tutorials",
          description: "AI-assisted production, Featured collaborations"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <header className="text-center mb-12">
          <img 
            src="/lovable-uploads/5282d507-e63f-47cc-b8fa-c1eec64f80fa.png" 
            alt="Customer Journey Map" 
            className="w-full max-w-5xl mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4">Ball Talk Journey Map</h1>
          <p className="text-xl text-gray-400 mb-8">Explore the journey of athletes and fans in our platform</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/artist">Athlete Dashboard</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/feed">Fan Feed</Link>
            </Button>
          </div>
        </header>

        <div className="overflow-x-auto">
          <div className="flex gap-8 min-w-max p-4">
            {stages.map((stage, index) => (
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
    </div>
  );
};

export default Index;
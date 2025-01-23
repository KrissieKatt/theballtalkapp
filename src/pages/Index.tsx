import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, MessageSquare, Crown } from "lucide-react";
import { JourneyStage } from "@/components/JourneyStage";

const Index = () => {
  const journeyStages = [
    {
      title: "Registration",
      color: "bg-blue-100/10",
      items: [
        {
          title: "Create Your Profile",
          description: "Sign up and customize your music preferences"
        },
        {
          title: "Set Preferences",
          description: "Tell us what genres and leagues you love"
        }
      ]
    },
    {
      title: "Discovery",
      color: "bg-green-100/10",
      items: [
        {
          title: "Browse Athletes",
          description: "Explore athletes by league and genre"
        },
        {
          title: "Create Playlists",
          description: "Curate your favorite athlete tracks"
        }
      ]
    },
    {
      title: "Engagement",
      color: "bg-purple-100/10",
      items: [
        {
          title: "Join Communities",
          description: "Connect with other fans and athletes"
        },
        {
          title: "Attend Events",
          description: "Participate in exclusive live sessions"
        }
      ]
    },
    {
      title: "Premium Features",
      color: "bg-pink-100/10",
      items: [
        {
          title: "VIP Access",
          description: "Get exclusive content and special perks"
        },
        {
          title: "Premium Events",
          description: "Join premium-only live events"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto p-6 text-white">
        <div className="mb-12 text-center">
          <img 
            src="/lovable-uploads/81ea06a5-3ab9-4fa3-9429-552541f28d65.png" 
            alt="The Ball Talk App" 
            className="h-24 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Your Journey in Athlete Music</h1>
          <p className="text-xl opacity-80 mb-8">Connect with athletes through their music journey</p>
        </div>

        {/* Journey Map */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-6 min-w-max pb-4">
            {journeyStages.map((stage, index) => (
              <JourneyStage
                key={index}
                title={stage.title}
                color={stage.color}
                items={stage.items}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/feed">
            <Button className="w-full h-32 text-lg bg-black/20 hover:bg-black/30 backdrop-blur-sm" variant="secondary">
              <Users className="mr-2 h-6 w-6" />
              Start Your Fan Journey
            </Button>
          </Link>
          
          <Link to="/artist">
            <Button className="w-full h-32 text-lg bg-black/20 hover:bg-black/30 backdrop-blur-sm" variant="secondary">
              <Music className="mr-2 h-6 w-6" />
              I'm an Athlete
            </Button>
          </Link>
          
          <Link to="/chat">
            <Button className="w-full h-32 text-lg bg-black/20 hover:bg-black/30 backdrop-blur-sm" variant="secondary">
              <MessageSquare className="mr-2 h-6 w-6" />
              Join Chat Rooms
            </Button>
          </Link>
          
          <Link to="/feed?premium=true">
            <Button className="w-full h-32 text-lg bg-black/20 hover:bg-black/30 backdrop-blur-sm" variant="secondary">
              <Crown className="mr-2 h-6 w-6" />
              Explore Premium
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
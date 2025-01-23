import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, MessageSquare, Crown } from "lucide-react";
import { JourneyStage } from "@/components/JourneyStage";
import { BallMusicAnimation } from "@/components/BallMusicAnimation";

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
    <div className="min-h-screen bg-apple-light-bg dark:bg-apple-dark-bg transition-colors duration-200">
      <div className="max-w-7xl mx-auto p-6 text-apple-light-text dark:text-apple-dark-text">
        <div className="mb-12 text-center space-y-6">
          <img 
            src="/lovable-uploads/81ea06a5-3ab9-4fa3-9429-552541f28d65.png" 
            alt="The Ball Talk App" 
            className="h-24 w-auto mx-auto"
          />
          <BallMusicAnimation />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Your Journey in Athlete Music</h1>
            <p className="text-xl text-apple-light-secondary dark:text-apple-dark-secondary max-w-2xl mx-auto">
              Connect with athletes through their music journey
            </p>
          </div>
        </div>

        {/* Journey Map */}
        <div className="mb-12 overflow-x-auto no-scrollbar">
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
          <Link to="/feed" className="apple-card group">
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span>Start Your Fan Journey</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/artist" className="apple-card group">
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Music className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span>I'm an Athlete</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/chat" className="apple-card group">
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <MessageSquare className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span>Join Chat Rooms</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/feed?premium=true" className="apple-card group">
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Crown className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span>Explore Premium</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
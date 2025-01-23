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
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink">
      <div className="max-w-7xl mx-auto p-6 text-white">
        <div className="mb-12 text-center space-y-6 animate-fade-up">
          <img 
            src="/lovable-uploads/6450fd7b-0d43-4e9f-8321-70c86bcd595c.png" 
            alt="The Ball Talk App" 
            className="h-48 w-auto mx-auto animate-scale-up" 
          />
          <BallMusicAnimation />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Your Journey in Athlete Music</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
          <Link to="/fan/feed" className="apple-card group animate-fade-up" style={{ animationDelay: '100ms' }}>
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span>Start Your Fan Journey</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/athlete/login" className="apple-card group animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Music className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span>I'm an Athlete</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/fan/chat" className="apple-card group animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <MessageSquare className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span>Join Chat Rooms</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/fan/feed?premium=true" className="apple-card group animate-fade-up" style={{ animationDelay: '400ms' }}>
            <Button className="w-full h-32 text-lg bg-transparent hover:bg-transparent" variant="ghost">
              <div className="flex flex-col items-center gap-3">
                <Crown className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
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
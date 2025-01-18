import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, MessageSquare, Mic } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">AthleteBeats</h1>
        <p className="text-xl mb-12">Where athletes share their music with fans</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/feed">
            <Button className="w-full h-32 text-lg" variant="secondary">
              <Users className="mr-2 h-6 w-6" />
              Fan Feed
            </Button>
          </Link>
          
          <Link to="/artist">
            <Button className="w-full h-32 text-lg" variant="secondary">
              <Music className="mr-2 h-6 w-6" />
              Artist Dashboard
            </Button>
          </Link>
          
          <Link to="/studio">
            <Button className="w-full h-32 text-lg" variant="secondary">
              <Mic className="mr-2 h-6 w-6" />
              Music Studio
            </Button>
          </Link>
          
          <Link to="/chat">
            <Button className="w-full h-32 text-lg" variant="secondary">
              <MessageSquare className="mr-2 h-6 w-6" />
              Chat Rooms
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
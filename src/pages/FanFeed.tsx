import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { MainNav } from "@/components/MainNav";

const FanFeed = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 border-b z-50">
        <div className="flex flex-col">
          <div className="flex items-center p-4 max-w-7xl mx-auto w-full">
            <img 
              src="/lovable-uploads/81ea06a5-3ab9-4fa3-9429-552541f28d65.png" 
              alt="The Ball Talk App" 
              className="h-12 w-auto"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <MainNav userType="fan" />
            </div>
          </div>
        </div>
      </nav>
      
      <div className="mt-32 space-y-6">
        {/* Music Post */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-md">
          <div className="p-4 flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Athlete Thompson</h3>
              <p className="text-sm text-gray-500">Pro Basketball Player</p>
            </div>
          </div>
          
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <audio 
                controls 
                className="w-full px-4"
                src="https://example.com/sample.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-6 w-6" />
              </Button>
            </div>
            <p className="font-semibold">1,234 likes</p>
            <p>
              <span className="font-semibold">Athlete Thompson</span>{" "}
              New track dropping! Let me know what you think 🎵 #basketball #music
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanFeed;
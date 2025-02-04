
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Edit, Settings, MessageSquare, Users, Music2, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Profile = () => {
  // In a real app, this would come from your auth/user context
  const user = {
    name: "John Smith",
    username: "@johnsmith",
    bio: "Professional athlete turned musician 🏀🎵",
    avatarUrl: "/placeholder.svg",
    followers: 1234,
    following: 567,
    tracks: 12,
    likes: 890,
  };

  const handleEditProfile = () => {
    toast.info("Edit profile coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="p-6 bg-black/20 backdrop-blur-sm border-white/10">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                  <p className="text-zinc-400">{user.username}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleEditProfile}
                    className="border-white/10 text-white hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-white/10 text-white hover:bg-white/10"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="mt-2 text-white">{user.bio}</p>

              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-1 text-white">
                  <Users className="h-4 w-4 text-zinc-400" />
                  <span className="font-semibold">{user.followers}</span>
                  <span className="text-zinc-400">followers</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <Users className="h-4 w-4 text-zinc-400" />
                  <span className="font-semibold">{user.following}</span>
                  <span className="text-zinc-400">following</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <Music2 className="h-4 w-4 text-zinc-400" />
                  <span className="font-semibold">{user.tracks}</span>
                  <span className="text-zinc-400">tracks</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <Heart className="h-4 w-4 text-zinc-400" />
                  <span className="font-semibold">{user.likes}</span>
                  <span className="text-zinc-400">likes</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Activity Feed */}
        <Card className="p-6 bg-black/20 backdrop-blur-sm border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Music2 className="h-5 w-5 text-zinc-400" />
              <div>
                <p className="text-white">Released a new track "Game Day Vibes"</p>
                <p className="text-sm text-zinc-400">2 days ago</p>
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex items-center gap-4">
              <Heart className="h-5 w-5 text-zinc-400" />
              <div>
                <p className="text-white">Liked "Victory Anthem" by Sarah Williams</p>
                <p className="text-sm text-zinc-400">4 days ago</p>
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex items-center gap-4">
              <MessageSquare className="h-5 w-5 text-zinc-400" />
              <div>
                <p className="text-white">Commented on "Pre-Game Mix" by Mike Johnson</p>
                <p className="text-sm text-zinc-400">1 week ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

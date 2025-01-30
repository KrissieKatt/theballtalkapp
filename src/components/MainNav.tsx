import { Link } from "react-router-dom";
import { Home, Music, Radio, Users, MessageSquare, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav({ userType }: { userType: "fan" | "athlete" | "admin" }) {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-4">
      {userType === "fan" && (
        <>
          <Link to="/fan/feed">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <Home className="h-4 w-4 text-[#84cc16]" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/fan/feed">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <Music className="h-4 w-4 text-[#84cc16]" />
              <span>Music</span>
            </Button>
          </Link>
          <Link to="/fan/chat">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <MessageSquare className="h-4 w-4 text-[#84cc16]" />
              <span>Chat</span>
            </Button>
          </Link>
          <Link to="/fan/beats">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <ShoppingBag className="h-4 w-4 text-[#84cc16]" />
              <span>Beats</span>
            </Button>
          </Link>
        </>
      )}
      
      {userType === "athlete" && (
        <>
          <Link to="/athlete/dashboard">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <Home className="h-4 w-4 text-[#84cc16]" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/athlete/studio">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <Radio className="h-4 w-4 text-[#84cc16]" />
              <span>Studio</span>
            </Button>
          </Link>
          <Link to="/athlete/chat">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
              <Users className="h-4 w-4 text-[#84cc16]" />
              <span>Community</span>
            </Button>
          </Link>
        </>
      )}

      {userType === "admin" && (
        <Link to="/admin">
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
            <Home className="h-4 w-4 text-[#84cc16]" />
            <span>Dashboard</span>
          </Button>
        </Link>
      )}
    </nav>
  );
}
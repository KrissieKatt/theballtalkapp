
import { LiveChat } from "@/components/LiveChat";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
  // TODO: Replace this with actual premium status check from your auth system
  const isPremiumUser = false;
  const navigate = useNavigate();

  if (!isPremiumUser) {
    return (
      <div className="container mx-auto p-4">
        <Card className="p-6 text-center space-y-4 max-w-xl mx-auto">
          <div className="flex justify-center">
            <Crown className="w-12 h-12 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold">Premium Feature</h2>
          <p className="text-muted-foreground">
            The live chat feature is exclusive to premium members. Upgrade your account to access:
          </p>
          <ul className="text-left space-y-2 mx-auto max-w-md">
            <li className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              Real-time chat with other athletes
            </li>
            <li className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              Private messaging
            </li>
            <li className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              Group conversations
            </li>
          </ul>
          <Button 
            onClick={() => navigate("/premium")} 
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
          >
            Upgrade to Premium
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <LiveChat />
    </div>
  );
};

export default ChatRoom;

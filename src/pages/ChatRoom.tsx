import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const ChatRoom = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        <div className="border-b p-4">
          <h1 className="text-xl font-bold">Chat with Athlete Thompson</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start space-x-2">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm font-semibold mb-1">Athlete Thompson</p>
              <p>Hey everyone! Thanks for checking out my new track!</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[80%]">
              <p>Love the new song! When's the next one coming?</p>
            </div>
            <Avatar>
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
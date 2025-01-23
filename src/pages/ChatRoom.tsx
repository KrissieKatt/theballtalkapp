import { useState } from "react";
import { MainNav } from "@/components/MainNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Users, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isAthlete?: boolean;
}

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Marcus Thompson",
      content: "Hey everyone! Thanks for joining the chat!",
      timestamp: new Date(),
      isAthlete: true
    },
    {
      id: "2",
      sender: "Sarah Williams",
      content: "Love your new track! When's the next release?",
      timestamp: new Date(),
      isAthlete: false
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "You",
      content: message,
      timestamp: new Date(),
      isAthlete: false
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
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
            <div className="max-w-7xl mx-auto">
              <MainNav userType="fan" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Active Chats Sidebar */}
        <Card className="p-4 md:col-span-1 bg-black/20 backdrop-blur-sm border-none">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search chats..." 
              className="bg-background/50"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4" />
            <h2 className="font-semibold">Active Chats</h2>
          </div>

          <ScrollArea className="h-[500px]">
            <div className="space-y-2">
              {["Marcus Thompson", "Sarah Williams", "John Davis"].map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer"
                >
                  <Avatar>
                    <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Area */}
        <Card className="md:col-span-3 bg-black/20 backdrop-blur-sm border-none flex flex-col h-[calc(100vh-12rem)]">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Marcus Thompson</h2>
                <p className="text-sm text-muted-foreground">Professional Basketball Player</p>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.sender === "You" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarFallback>
                      {msg.sender.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      msg.sender === "You"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">{msg.sender}</p>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default ChatRoom;
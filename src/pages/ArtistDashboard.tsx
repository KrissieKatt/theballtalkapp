import { MainNav } from "@/components/MainNav";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { PlusCircle, Users, PlayCircle, TrendingUp, MessageCircle, BellDot } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";

const mockStreamingData = [
  { date: '2024-01', streams: 4000 },
  { date: '2024-02', streams: 3000 },
  { date: '2024-03', streams: 5000 },
  { date: '2024-04', streams: 7000 },
  { date: '2024-05', streams: 6000 },
  { date: '2024-06', streams: 8000 },
];

const mockArtists = [
  { id: 1, name: "John Smith", genre: "Hip Hop", streams: "50K" },
  { id: 2, name: "Maria Garcia", genre: "R&B", streams: "45K" },
  { id: 3, name: "David Lee", genre: "Pop", streams: "60K" },
];

const ArtistDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasUnreadMessages, setHasUnreadMessages] = useState(true);

  // Simulate receiving a new message
  const simulateNewMessage = () => {
    toast("New Message", {
      description: "You have a new message from John Smith",
      action: {
        label: "View",
        onClick: () => setHasUnreadMessages(false)
      },
    });
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
              <MainNav userType="athlete" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 px-4 max-w-7xl mx-auto">
        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Artists</p>
                <h3 className="text-2xl font-bold">{mockArtists.length}</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <PlayCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Streams</p>
                <h3 className="text-2xl font-bold">155K</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Growth</p>
                <h3 className="text-2xl font-bold">+24%</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Streaming Analytics Chart */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Streaming Analytics</h2>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                streams: {
                  theme: {
                    light: "hsl(var(--primary))",
                    dark: "hsl(var(--primary))",
                  },
                },
              }}
            >
              <AreaChart data={mockStreamingData}>
                <defs>
                  <linearGradient id="colorStreams" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip />
                <Area
                  type="monotone"
                  dataKey="streams"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorStreams)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </Card>

        {/* Artist Management */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Manage Artists</h2>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Artist
            </Button>
          </div>
          
          <div className="mb-4">
            <Input
              placeholder="Search artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="space-y-4">
            {mockArtists.map((artist) => (
              <Card key={artist.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{artist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.genre}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{artist.streams} streams</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </main>

      {/* Floating Chat Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 rounded-full shadow-lg"
            onClick={() => setHasUnreadMessages(false)}
          >
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              {hasUnreadMessages && (
                <span className="absolute -top-1 -right-1">
                  <BellDot className="h-4 w-4 text-red-500" />
                </span>
              )}
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Messages</h2>
            <div className="flex-1 overflow-y-auto">
              {/* Chat messages would go here */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Hey, loved your latest track!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button onClick={() => toast.success("Message sent!")}>Send</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ArtistDashboard;
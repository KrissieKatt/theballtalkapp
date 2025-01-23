import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FanFeed from "./pages/FanFeed";
import ArtistDashboard from "./pages/ArtistDashboard";
import Studio from "./pages/Studio";
import ChatRoom from "./pages/ChatRoom";
import { AthleteLoginForm } from "./components/AthleteLoginForm";
import { AthleteVerificationForm } from "./components/AthleteVerificationForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feed" element={<FanFeed />} />
          <Route path="/artist" element={<ArtistDashboard />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/athlete/login" element={<AthleteLoginForm />} />
          <Route path="/athlete/verify" element={<AthleteVerificationForm />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
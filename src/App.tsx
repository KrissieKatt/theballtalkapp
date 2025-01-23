import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import FanFeed from "./pages/FanFeed";
import ArtistDashboard from "./pages/ArtistDashboard";
import Studio from "./pages/Studio";
import ChatRoom from "./pages/ChatRoom";
import { AthleteLoginForm } from "./components/AthleteLoginForm";
import { AthleteVerificationForm } from "./components/AthleteVerificationForm";
import AdminDashboard from "./pages/AdminDashboard";
import BandLab from "./pages/BandLab";
import BeatMarketplace from "./pages/BeatMarketplace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          
          {/* Fan routes */}
          <Route path="/fan">
            <Route path="feed" element={<FanFeed />} />
            <Route path="chat" element={<ChatRoom />} />
            <Route path="bandlab" element={<BandLab />} />
            <Route path="beats" element={<BeatMarketplace />} />
          </Route>
          
          {/* Athlete routes */}
          <Route path="/athlete">
            <Route path="login" element={<AthleteLoginForm />} />
            <Route path="verify" element={<AthleteVerificationForm />} />
            <Route path="dashboard" element={<ArtistDashboard />} />
            <Route path="studio" element={<Studio />} />
            <Route path="bandlab" element={<BandLab />} />
            <Route path="beats" element={<BeatMarketplace />} />
          </Route>
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FanFeed from "./pages/FanFeed";
import ChatRoom from "./pages/ChatRoom";
import AdminDashboard from "./pages/AdminDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import Studio from "./pages/Studio";
import BandLab from "./pages/BandLab";
import BeatMarketplace from "./pages/BeatMarketplace";
import LiveStreaming from "./pages/LiveStreaming";
import Discovery from "./pages/Discovery";
import AllTracks from "./pages/AllTracks";
import Podcasts from "./pages/Podcasts";
import Profile from "./pages/Profile";
import { AthleteLoginForm } from "./components/AthleteLoginForm";
import { AthleteVerificationForm } from "./components/AthleteVerificationForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Artist/Athlete routes */}
          <Route path="/artist" element={<ArtistDashboard />} />
          <Route path="/athlete">
            <Route path="login" element={<AthleteLoginForm />} />
            <Route path="verify" element={<AthleteVerificationForm />} />
          </Route>
          
          {/* Fan routes */}
          <Route path="/fan">
            <Route path="feed" element={<FanFeed />} />
            <Route path="discover" element={<Discovery />} />
            <Route path="chat" element={<ChatRoom />} />
            <Route path="bandlab" element={<BandLab />} />
            <Route path="beats" element={<BeatMarketplace />} />
            <Route path="studio" element={<Studio />} />
            <Route path="live" element={<LiveStreaming />} />
            <Route path="tracks" element={<AllTracks />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

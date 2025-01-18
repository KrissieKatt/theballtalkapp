import { MainNav } from "@/components/MainNav";

const ArtistDashboard = () => {
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

      <main className="pt-32 px-4">
        <h1 className="text-2xl font-bold mb-6">Artist Dashboard</h1>
        <p>Welcome to your dashboard. Analytics and controls coming soon.</p>
      </main>
    </div>
  );
};

export default ArtistDashboard;
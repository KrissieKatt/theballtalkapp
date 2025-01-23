import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AudioWorkspace } from "@/components/AudioWorkspace";
import { ProjectLibrary } from "@/components/ProjectLibrary";
import { CopyrightManager } from "@/components/CopyrightManager";
import { CollaborationHub } from "@/components/CollaborationHub";
import { Music, Users, Shield, Share2 } from "lucide-react";

const BandLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">BandLab Studio</h1>
          <Button className="apple-button">
            <Share2 className="mr-2 h-4 w-4" />
            Share Project
          </Button>
        </header>

        <Tabs defaultValue="workspace" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="workspace">
              <Music className="mr-2 h-4 w-4" />
              Workspace
            </TabsTrigger>
            <TabsTrigger value="projects">
              <Music className="mr-2 h-4 w-4" />
              My Projects
            </TabsTrigger>
            <TabsTrigger value="collaborate">
              <Users className="mr-2 h-4 w-4" />
              Collaborate
            </TabsTrigger>
            <TabsTrigger value="copyright">
              <Shield className="mr-2 h-4 w-4" />
              Copyright
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workspace">
            <AudioWorkspace />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectLibrary />
          </TabsContent>

          <TabsContent value="collaborate">
            <CollaborationHub />
          </TabsContent>

          <TabsContent value="copyright">
            <CopyrightManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BandLab;
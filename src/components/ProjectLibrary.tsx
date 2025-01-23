import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Edit, Share2, MoreVertical } from "lucide-react";

export const ProjectLibrary = () => {
  const projects = [
    {
      id: "1",
      title: "Summer Hit 2024",
      lastModified: "2 hours ago",
      duration: "3:45",
      status: "In Progress"
    },
    // Add more projects here
  ];

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                Last modified: {project.lastModified}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{project.status}</Badge>
              <Button variant="ghost" size="icon">
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
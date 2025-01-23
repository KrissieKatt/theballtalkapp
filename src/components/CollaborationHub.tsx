import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageSquare, UserPlus } from "lucide-react";
import { toast } from "sonner";

export const CollaborationHub = () => {
  const collaborators = [
    {
      id: "1",
      name: "John Doe",
      role: "Producer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      online: true
    },
    // Add more collaborators
  ];

  const handleInvite = () => {
    toast.success("Invitation sent successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Active Collaborators</h2>
        <Button onClick={handleInvite}>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collaborators.map((collaborator) => (
          <Card key={collaborator.id} className="p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={collaborator.avatar} />
                <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{collaborator.name}</h3>
                <p className="text-sm text-muted-foreground">{collaborator.role}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Download, Upload } from "lucide-react";
import { toast } from "sonner";

export const CopyrightManager = () => {
  const handleRegister = () => {
    toast.success("Copyright registration initiated!");
  };

  const copyrightedWorks = [
    {
      id: "1",
      title: "Summer Hit 2024",
      registrationDate: "2024-02-20",
      status: "Protected",
      type: "Song"
    },
    // Add more works
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Copyright Registration</h2>
            <p className="text-sm text-muted-foreground">
              Protect your musical works and secure your rights
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Work Title" />
            <Input type="date" />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleRegister}>
              Register Copyright
            </Button>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Protected Works</h3>
        {copyrightedWorks.map((work) => (
          <Card key={work.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-semibold">{work.title}</h4>
                <p className="text-sm text-muted-foreground">
                  Registered on {work.registrationDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{work.type}</Badge>
                <Badge 
                  variant="outline" 
                  className="bg-green-500/10 text-green-500"
                >
                  {work.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
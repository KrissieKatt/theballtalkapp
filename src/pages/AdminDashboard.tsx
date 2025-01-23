import { MainNav } from "@/components/MainNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, UserCog } from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const mockPendingVerifications = [
    {
      id: 1,
      name: "John Smith",
      sport: "Basketball",
      team: "LA Lakers",
      status: "pending",
    },
    {
      id: 2,
      name: "Maria Garcia",
      sport: "Soccer",
      team: "US Women's National Team",
      status: "pending",
    },
  ];

  const handleVerification = (id: number, action: 'approve' | 'reject') => {
    toast.success(`Athlete ${action === 'approve' ? 'approved' : 'rejected'} successfully`);
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
            <Badge variant="secondary" className="ml-4">
              <UserCog className="w-4 h-4 mr-1" />
              Admin Panel
            </Badge>
          </div>
        </div>
      </nav>

      <main className="pt-32 px-4 max-w-7xl mx-auto">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Pending Verifications</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Sport</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPendingVerifications.map((verification) => (
                <TableRow key={verification.id}>
                  <TableCell>{verification.name}</TableCell>
                  <TableCell>{verification.sport}</TableCell>
                  <TableCell>{verification.team}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-green-500"
                        onClick={() => handleVerification(verification.id, 'approve')}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-500"
                        onClick={() => handleVerification(verification.id, 'reject')}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
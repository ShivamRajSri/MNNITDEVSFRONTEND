import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Eye, Mail, Calendar, User, MessageSquare } from "lucide-react";

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('http://localhost:3000/contact-submissions');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch submissions");
      }

      setSubmissions(data.submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast({
        title: "Error",
        description: "Failed to fetch contact submissions.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (_id: string, status: string) => {
    try {
      const response = await fetch('http://localhost:3000/contact-submissions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id, status })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to update status");
      }

      setSubmissions(prev =>
        prev.map(sub => (sub._id === _id ? { ...sub, status } : sub))
      );

      toast({
        title: "Status Updated",
        description: `Submission marked as ${status}.`
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update submission status.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-700 border-blue-500/30';
      case 'completed': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-700 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 bg-gradient-hero border-b border-primary/20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage contact form submissions and project inquiries</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {["Total Submissions", "Pending", "In Progress", "Completed"].map((label, idx) => {
              const count = submissions.filter(s =>
                idx === 0 ? true :
                idx === 1 ? s.status === 'pending' :
                idx === 2 ? s.status === 'in-progress' :
                s.status === 'completed'
              ).length;

              const Icon = [MessageSquare, Calendar, User, Eye][idx];
              const color = ['text-primary', 'text-yellow-500', 'text-blue-500', 'text-green-500'][idx];

              return (
                <Card key={label} className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${color}`} />
                      <span className="text-2xl font-bold text-foreground">{count}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Contact Submissions</CardTitle>
              <CardDescription>Review and manage all contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-primary/20 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-primary/20">
                      <TableHead className="text-foreground">Name</TableHead>
                      <TableHead className="text-foreground">Email</TableHead>
                      <TableHead className="text-foreground">Service</TableHead>
                      <TableHead className="text-foreground">Status</TableHead>
                      <TableHead className="text-foreground">Date</TableHead>
                      <TableHead className="text-foreground">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission._id} className="border-primary/20 hover:bg-muted/30">
                        <TableCell className="font-medium text-foreground">{submission.name}</TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${submission.email}`}
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            <Mail className="h-4 w-4" />
                            {submission.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{submission.service}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(submission.status)}>
                            {submission.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(submission.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatus(submission._id, 'in-progress')}
                              className="border-primary/50 text-foreground hover:bg-primary/10"
                            >
                              In Progress
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => updateStatus(submission._id, 'completed')}
                              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                            >
                              Complete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {submissions.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">No contact submissions yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admin;
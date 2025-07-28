import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Phone, Send, Star, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const UserConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://mnnitbackend.onrender.com/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Unknown error');
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", service: "", message: "" });

    // Optionally open WhatsApp preview if returned
    if (result?.whatsappUrl) {
      window.open(result.whatsappUrl, '_blank');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast({
      title: "Error",
      description: "Failed to send message. Invalid Mail id or Network Issue",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
                {/* <img
          src={heroImage}
          alt="Modern tech workspace"
          className="w-full h-full object-cover opacity-30"
        /> */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch with our team and start your project today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Start Your Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Service Required</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })} disabled={isSubmitting}>
                    <SelectTrigger className="bg-background/50 border-primary/30">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="fullstack">Full-Stack Solution</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/30 focus:border-primary min-h-[120px]"
                    placeholder="Tell us about your project requirements..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Testimonials */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:shivamrajsriavastav294@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    shivamrajsriavastav294@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground">MNNIT Allahabad Developer Community</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+91 6307515985</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserConnect;
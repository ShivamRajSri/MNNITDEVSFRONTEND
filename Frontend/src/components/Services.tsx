import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, Database, Code2, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Performance Focused"],
      color: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native Performance", "App Store Ready"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with modern frameworks",
      features: ["Node.js & Express", "Database Design", "API Development", "Cloud Integration"],
      color: "text-purple-400"
    },
    {
      icon: Code2,
      title: "Full-Stack Solutions",
      description: "Complete end-to-end development with seamless integration",
      features: ["MERN Stack", "PostgreSQL", "MongoDB", "Prisma ORM"],
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications for better user experience",
      features: ["Code Optimization", "Caching Strategies", "CDN Integration", "Load Testing"],
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Secure your applications with best practices and ongoing support",
      features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Support"],
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web and mobile development services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-secondary">
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="mr-2 mb-2 border-primary/30 text-foreground hover:bg-primary/10"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
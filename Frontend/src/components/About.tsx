import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, User } from "lucide-react";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "Node.js", "React", 
    "PostgreSQL", "Prisma", "MongoDB", "Express","MORE"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Meet the Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading the MNNIT Allahabad developer community with expertise and passion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-soft">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Mr. Shivam Raj Srivastav
              </CardTitle>
              <p className="text-lg text-primary font-semibold">Lead Developer & Community Head</p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>MNNIT Allahabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:shivamrajsriavastav294@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    shivamrajsriavastav294@gmail.com
                  </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Expertise</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-gradient-secondary border-primary/30 text-foreground hover:shadow-glow transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-muted-foreground leading-relaxed">
                  With extensive experience in full-stack development, Shivam leads our community 
                  of talented developers at MNNIT Allahabad. Specializing in modern web technologies 
                  and database management, he ensures every project meets the highest standards of 
                  quality and innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
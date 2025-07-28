import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); 
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online marketplace with payment integration, user authentication, and admin dashboard.",
      image: "/Video/Ecommerce2.O.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with messaging, post sharing, and user profiles.",
      image: "/Video/Socialmedia.jpeg",
      technologies: ["React Native", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with data visualization and reporting tools.",
      image: "/Video/Analytic.png",
      technologies: ["Next.js", "Chart.js", "Prisma", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with team features and progress tracking.",
      image: "/Video/Taskimage.jpeg",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, quizzes, and student progress tracking.",
      image: "/Video/Learningimage.jpeg",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Food Delivery App",
      description: "Mobile application for food ordering with real-time tracking and payment integration.",
      image: "/Video/Fooddelimage.jpeg",
      technologies: ["Flutter", "Node.js", "MongoDB", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    }
  ];

  const categories = ["All", "Web", "Mobile", "Full-Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of successful projects and see how we bring ideas to life
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="relative aspect-video bg-gradient-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gradient-secondary border-primary/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary/30 text-foreground hover:bg-primary/10 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => navigate("/Admin")} 
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Build Your Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
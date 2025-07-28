import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DemoVideo = () => {
  const navigate = useNavigate(); // ✅ fix is here

  const handleWatchDemo = () => {
    navigate("/watch-demo", {
      state: {
        videoPath: "/Video/MNNIT WEB SERVICES.mp4",
      },
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            See Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we transform ideas into powerful web and mobile applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-soft overflow-hidden">
            <div className="relative aspect-video bg-gradient-secondary rounded-lg m-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-glow transition-all duration-300 cursor-pointer group">
                    <Play className="h-8 w-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Portfolio Showcase</h3>
                  <p className="text-muted-foreground">Interactive demo of our Services</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
            </div>

            <div className="p-6 border-t border-primary/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">E-commerce Platform</h4>
              <p className="text-sm text-muted-foreground">Full-featured online store with payment integration</p>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Social Media App</h4>
              <p className="text-sm text-muted-foreground">Mobile-first social platform with real-time features</p>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Dashboard Analytics</h4>
              <p className="text-sm text-muted-foreground">Data visualization and business intelligence tools</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
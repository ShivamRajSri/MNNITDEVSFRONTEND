import { useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate(); 

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern tech workspace"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-foreground">MNNIT Allahabad</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Web Development
            <br />
            Excellence
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional web and mobile app development services by the MNNIT developer community.
            Bringing your digital ideas to life with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => navigate("/Admin")} 
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10"
              onClick={() => navigate("/portfolio")} 
            >
              <Laptop className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Heart, Mail, MapPin, Phone, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">MNNIT WebWorks</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional web and mobile development services by the MNNIT Allahabad developer community.
            </p>
             <div className="flex flex-wrap gap-2">
             <Badge variant="secondary" className="bg-gradient-secondary border-primary/30 text-white">React</Badge>
             <Badge variant="secondary" className="bg-gradient-secondary border-primary/30 text-white">Node.js</Badge>
             <Badge variant="secondary" className="bg-gradient-secondary border-primary/30 text-white">MongoDB</Badge>
              </div>

          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Mobile App Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Full-Stack Solutions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">API Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Database Design</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>MNNIT Allahabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:shivamrajsriavastav294@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  shivamrajsriavastav294@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+916307515985" 
                  className="hover:text-primary transition-colors"
                >
                  +91 6307515985
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Github className="h-4 w-4 text-primary" />
                <a 
                  href="https://github.com/ShivamRajSri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/ShivamRajSri
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/20 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="text-center">
            <span>Led by </span>
            <span className="text-primary font-semibold">Mr. Shivam Raj Srivastav</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
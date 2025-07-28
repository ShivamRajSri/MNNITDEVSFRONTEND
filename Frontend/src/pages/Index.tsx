import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DemoVideo from "@/components/DemoVideo";
import UserInteraction from "@/components/UserInteraction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <DemoVideo />
      {/* <UserInteraction /> */}
      <Footer />
    </div>
  );
};

export default Index;

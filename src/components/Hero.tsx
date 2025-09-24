import { Heart, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-storyswap.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Warm collection of vintage items with stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="story-reveal animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Every Item Has a{" "}
            <span className="text-story-accent font-serif italic">Story</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover meaningful second-hand treasures with heartfelt histories. 
            Give cherished items new chapters while building sustainable community connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Browse Stories
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-warm px-8 py-4 text-lg">
              <Heart className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>5,000+ Stories Shared</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span>Items Saved from Landfills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
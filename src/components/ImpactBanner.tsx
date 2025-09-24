import { Leaf, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactBanner = () => {
  return (
    <section className="py-16 px-6 bg-sage-green/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-vintage-brown mb-4">
            Building a Sustainable Future, One Story at a Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every item you buy or sell on StorySwap helps create a more sustainable world. 
            See the real impact our community is making together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 story-card">
            <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-sage-green" />
            </div>
            <div className="text-3xl font-bold text-vintage-brown mb-2">3.2M lbs</div>
            <div className="text-lg font-semibold text-sage-green mb-2">CO₂ Saved</div>
            <p className="text-sm text-muted-foreground">
              By giving items second lives instead of buying new, our community has prevented massive carbon emissions.
            </p>
          </div>
          
          <div className="text-center p-6 story-card">
            <div className="w-16 h-16 rounded-full bg-story-accent/20 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-story-accent" />
            </div>
            <div className="text-3xl font-bold text-vintage-brown mb-2">12,000+</div>
            <div className="text-lg font-semibold text-story-accent mb-2">Items Rehomed</div>
            <p className="text-sm text-muted-foreground">
              Thousands of cherished items have found new families, continuing their stories instead of ending up in landfills.
            </p>
          </div>
          
          <div className="text-center p-6 story-card">
            <div className="w-16 h-16 rounded-full bg-sunset-orange/20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-sunset-orange" />
            </div>
            <div className="text-3xl font-bold text-vintage-brown mb-2">5,000+</div>
            <div className="text-lg font-semibold text-sunset-orange mb-2">Stories Shared</div>
            <p className="text-sm text-muted-foreground">
              Real stories from real people, creating meaningful connections and preserving memories for future generations.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="shadow-story">
            Join Our Community Impact
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
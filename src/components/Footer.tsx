import { Heart, Recycle, Users, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vintage-brown text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-story-accent flex items-center justify-center">
                <Heart className="h-6 w-6 text-vintage-brown" />
              </div>
              <span className="text-2xl font-bold font-serif">StorySwap</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Every item has a story. We're building a sustainable marketplace where meaningful connections happen through the items we share and the stories we tell.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-story-accent mb-1">5,000+</div>
                <div className="text-sm text-primary-foreground/70">Stories Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-story-accent mb-1">12K+</div>
                <div className="text-sm text-primary-foreground/70">Items Rehomed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-story-accent mb-1">3.2M</div>
                <div className="text-sm text-primary-foreground/70">lbs CO₂ Saved</div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-story-accent">Discover</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Browse All Items</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Categories</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Featured Stories</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Local Finds</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Story Collections</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-story-accent">Community</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">How It Works</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Story Guidelines</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Impact Report</a></li>
              <li><a href="#" className="story-link hover:text-story-accent transition-colors">Community Stories</a></li>
            </ul>
          </div>
        </div>
        
        {/* Community Impact Banner */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-story-accent" />
                <span className="text-sm">Sustainability First</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-story-accent" />
                <span className="text-sm">Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-story-accent" />
                <span className="text-sm">Stories Matter</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <span>hello@storyswap.com</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © 2024 StorySwap. Every story matters. Every item deserves a new chapter.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
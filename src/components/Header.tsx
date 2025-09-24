import { Search, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-story-accent to-vintage-brown flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-vintage-brown font-serif">
              StorySwap
            </span>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button className="story-link text-vintage-brown hover:text-story-accent font-medium">
              Browse
            </button>
            <button className="story-link text-vintage-brown hover:text-story-accent font-medium">
              Categories
            </button>
            <button className="story-link text-vintage-brown hover:text-story-accent font-medium">
              How it Works
            </button>
            <button className="story-link text-vintage-brown hover:text-story-accent font-medium">
              Community
            </button>
          </nav>
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by story, item, or location..."
                className="pl-10 bg-story-muted border-border focus:border-story-accent"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex border-story-accent text-story-accent hover:bg-story-accent hover:text-vintage-brown">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            
            <Button size="sm" variant="story" className="">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by story, item, or location..."
              className="pl-10 bg-story-muted border-border focus:border-story-accent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
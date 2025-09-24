import { Search, Heart, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import AuthModal from "./AuthModal";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, isAuthenticated, logout } = useAuth();
  const { favoritesCount } = useFavorites();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to featured items section
      const featuredSection = document.getElementById('featured-items');
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-story-accent to-vintage-brown flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-vintage-brown font-serif">
              StorySwap
            </span>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              className="story-link text-vintage-brown hover:text-story-accent font-medium"
              onClick={() => document.getElementById('featured-items')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse
            </button>
            <button 
              className="story-link text-vintage-brown hover:text-story-accent font-medium"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Categories
            </button>
            <button 
              className="story-link text-vintage-brown hover:text-story-accent font-medium"
              onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Impact
            </button>
            <button className="story-link text-vintage-brown hover:text-story-accent font-medium">
              Community
            </button>
          </nav>
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by story, item, or location..."
                className="pl-10 bg-story-muted border-border focus:border-story-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex border-story-accent text-story-accent hover:bg-story-accent hover:text-vintage-brown relative"
            >
              <Heart className="h-4 w-4 mr-2" />
              Favorites
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-story-accent text-vintage-brown text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </Button>
            
            {!isAuthenticated ? (
              <AuthModal>
                <Button variant="story" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </AuthModal>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="story" size="sm">
                    <div className="w-4 h-4 rounded-full bg-story-accent flex items-center justify-center text-xs font-semibold text-vintage-brown mr-2">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>My Listings</DropdownMenuItem>
                  <DropdownMenuItem>Messages</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by story, item, or location..."
              className="pl-10 bg-story-muted border-border focus:border-story-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
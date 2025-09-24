import { Heart, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StoryCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  timeAgo: string;
  story: string;
  image: string;
  category: string;
  seller: {
    name: string;
    avatar?: string;
    trustScore: number;
  };
}

const StoryCard = ({ 
  title, 
  price, 
  location, 
  timeAgo, 
  story, 
  image, 
  category, 
  seller 
}: StoryCardProps) => {
  return (
    <Card className="story-card hover-lift group">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-story-muted text-vintage-brown border-none">
            {category}
          </Badge>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm border-none hover:bg-card"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-vintage-brown leading-tight">
            {title}
          </h3>
          <span className="text-xl font-bold text-story-accent">
            ${price}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{timeAgo}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {story}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-story-accent flex items-center justify-center text-xs font-semibold text-vintage-brown">
              {seller.name.charAt(0)}
            </div>
            <span className="text-sm text-muted-foreground">{seller.name}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full mx-0.5 ${
                    i < seller.trustScore ? 'bg-story-accent' : 'bg-muted'
                  }`} 
                />
              ))}
            </div>
          </div>
          
          <Button size="sm" variant="outline" className="story-link">
            Read Story
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
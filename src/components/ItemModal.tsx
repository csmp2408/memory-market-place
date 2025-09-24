import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Clock, User, Star, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ItemModalProps {
  children: React.ReactNode;
  item: {
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
  };
}

const ItemModal = ({ children, item }: ItemModalProps) => {
  const [open, setOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('storyswap_favorites') || '[]');
    
    if (isFavorited) {
      const updatedFavorites = favorites.filter((fav: any) => fav.id !== item.id);
      localStorage.setItem('storyswap_favorites', JSON.stringify(updatedFavorites));
      setIsFavorited(false);
      toast({
        title: "Removed from favorites",
        description: "Item removed from your favorites list.",
      });
    } else {
      favorites.push(item);
      localStorage.setItem('storyswap_favorites', JSON.stringify(favorites));
      setIsFavorited(true);
      toast({
        title: "Added to favorites",
        description: "Item saved to your favorites list.",
      });
    }
  };

  const handleContact = () => {
    toast({
      title: "Message sent!",
      description: `Your interest in "${item.title}" has been sent to ${item.seller.name}.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="secondary" className="bg-story-muted text-vintage-brown border-none mb-2">
                  {item.category}
                </Badge>
                <h2 className="text-2xl font-bold text-vintage-brown font-serif">{item.title}</h2>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-story-accent">${item.price}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{item.timeAgo}</span>
              </div>
            </div>
          </div>
          
          {/* Story */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-vintage-brown">The Story</h3>
            <p className="text-muted-foreground leading-relaxed">{item.story}</p>
          </div>
          
          {/* Seller Info */}
          <div className="p-4 bg-story-muted rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-story-accent flex items-center justify-center text-lg font-semibold text-vintage-brown">
                  {item.seller.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-vintage-brown">{item.seller.name}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${
                          i < item.seller.trustScore ? 'text-story-accent fill-current' : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({item.seller.trustScore}/5 trust score)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleFavorite}
              className={`flex-1 ${isFavorited ? 'text-red-500 border-red-500' : ''}`}
            >
              <Heart className={`mr-2 h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
              {isFavorited ? 'Favorited' : 'Add to Favorites'}
            </Button>
            
            <Button 
              variant="hero" 
              onClick={handleContact}
              className="flex-1"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Seller
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemModal;
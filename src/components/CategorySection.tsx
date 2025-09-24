import { BookOpen, Camera, Home, Palette, Shirt, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Books & Literature",
    icon: BookOpen,
    count: 1200,
    color: "text-vintage-brown",
    bgColor: "bg-story-muted"
  },
  {
    name: "Vintage Fashion", 
    icon: Shirt,
    count: 890,
    color: "text-sage-green",
    bgColor: "bg-sage-green/10"
  },
  {
    name: "Home & Decor",
    icon: Home,
    count: 650,
    color: "text-sunset-orange",
    bgColor: "bg-sunset-orange/10"
  },
  {
    name: "Electronics",
    icon: Camera,
    count: 420,
    color: "text-story-accent",
    bgColor: "bg-story-accent/10"
  },
  {
    name: "Collectibles",
    icon: Gem,
    count: 780,
    color: "text-vintage-brown",
    bgColor: "bg-vintage-brown/10"
  },
  {
    name: "Handmade",
    icon: Palette,
    count: 340,
    color: "text-sage-green",
    bgColor: "bg-sage-green/10"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 px-6" id="categories">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-vintage-brown mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every category tells different stories. Find items that speak to your heart.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost" 
                className="story-card hover-lift cursor-pointer p-6 text-center group h-auto flex flex-col"
                onClick={() => {
                  // Scroll to featured items and show a toast
                  document.getElementById('featured-items')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className={`h-8 w-8 ${category.color}`} />
                </div>
                
                <h3 className="font-semibold text-vintage-brown mb-2 text-lg">
                  {category.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {category.count} stories waiting
                </p>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
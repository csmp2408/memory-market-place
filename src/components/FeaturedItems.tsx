import StoryCard from "./StoryCard";
import { sampleItems } from "@/data/sampleItems";
import { Button } from "@/components/ui/button";

const FeaturedItems = () => {
  return (
    <section className="py-16 px-6 warm-gradient" id="featured-items">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-vintage-brown mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each item comes with a heartfelt story. Discover treasures that have been loved and are ready for their next chapter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleItems.map((item) => (
            <StoryCard key={item.id} {...item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="story-link text-vintage-brown font-semibold text-lg hover:text-story-accent border-vintage-brown hover:bg-vintage-brown hover:text-primary-foreground transition-colors"
            onClick={() => {
              // Scroll to categories section
              document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Stories →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
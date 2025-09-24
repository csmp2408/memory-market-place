import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import CategorySection from "@/components/CategorySection";
import ImpactBanner from "@/components/ImpactBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedItems />
        <CategorySection />
        <ImpactBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

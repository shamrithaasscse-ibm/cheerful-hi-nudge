import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TrendingSection from "@/components/home/TrendingSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import PromoSection from "@/components/home/PromoSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <TrendingSection />
      <PromoSection />
      <FeaturedSection />
    </Layout>
  );
};

export default Index;

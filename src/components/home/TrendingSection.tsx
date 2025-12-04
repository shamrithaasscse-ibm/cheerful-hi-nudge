import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getTrendingProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const TrendingSection = () => {
  const trendingProducts = getTrendingProducts();

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
              Trending Now
            </h2>
            <p className="text-muted-foreground">
              Discover what's popular among our customers
            </p>
          </div>
          <Link to="/products?trending=true">
            <Button variant="ghost" className="gap-2 group">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.slice(0, 4).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className="animate-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;

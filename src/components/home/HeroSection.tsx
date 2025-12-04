import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-in">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
              New Collection 2024
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Discover Your
              <span className="block text-gradient">Perfect Style</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-in-delayed">
              Explore our curated collection of premium products designed for 
              the modern lifestyle. Quality meets elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in-delayed-2">
              <Link to="/products">
                <Button size="lg" className="btn-primary px-8 gap-2 group">
                  Shop Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products?featured=true">
                <Button size="lg" variant="outline" className="btn-outline px-8">
                  View Featured
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              {[
                { value: "50k+", label: "Happy Customers" },
                { value: "1.2k", label: "Products" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in-delayed">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
                alt="Hero fashion"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -left-4 sm:-left-8 bottom-20 bg-card p-4 rounded-xl shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah M.</p>
                    <p className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  "Absolutely love the quality!"
                </p>
              </div>

              {/* Promo Badge */}
              <div className="absolute -right-4 sm:-right-6 top-20 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: "-2s" }}>
                <p className="text-sm font-semibold">Up to 40% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

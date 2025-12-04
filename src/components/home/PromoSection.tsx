import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RefreshCcw, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer care",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      {/* Promo Banner */}
      <div className="container-custom mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-background rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-background/20 text-primary-foreground rounded-full mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
                Summer Sale
                <br />
                Up to 40% Off
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto lg:mx-0">
                Don't miss out on our biggest sale of the season. Shop now and save big on your favorite items.
              </p>
              <Link to="/products">
                <Button size="lg" variant="secondary" className="gap-2 group">
                  Shop the Sale
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
                alt="Sale"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

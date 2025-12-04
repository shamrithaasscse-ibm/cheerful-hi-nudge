import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-foreground">
                Luxe<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating the finest products for modern living. Quality, style, and 
              sustainability in every piece.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Shop All", "New Arrivals", "Best Sellers", "Sale"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {["FAQ", "Shipping", "Returns", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Luxe. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="card-hover bg-card rounded-xl overflow-hidden border border-border/50">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <span className="px-2 py-1 text-xs font-medium bg-destructive text-destructive-foreground rounded-md">
                -{discount}%
              </span>
            )}
            {product.trending && (
              <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
                Trending
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              className="w-full btn-primary rounded-lg gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-semibold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

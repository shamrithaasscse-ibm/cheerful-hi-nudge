import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
  style?: React.CSSProperties;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/5] card-hover">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-display font-semibold text-background mb-1">
            {category.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-background/70">
              {category.productCount} products
            </p>
            <div className="h-8 w-8 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowRight className="h-4 w-4 text-background group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

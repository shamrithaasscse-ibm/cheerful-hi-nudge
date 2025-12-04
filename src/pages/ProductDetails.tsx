import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  Shield,
  RefreshCcw,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/products">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container-custom pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/30"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="animate-in">
            <div className="space-y-6">
              {/* Category & Badges */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                {discount > 0 && (
                  <span className="px-2 py-1 text-xs font-medium bg-destructive text-destructive-foreground rounded-md">
                    -{discount}% OFF
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(product.rating)
                          ? "fill-warning text-warning"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  className="flex-1 btn-primary gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>

                <Button size="lg" variant="outline" className="btn-outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {[
                  { icon: Truck, label: "Free Shipping" },
                  { icon: Shield, label: "2 Year Warranty" },
                  { icon: RefreshCcw, label: "30-Day Returns" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border bg-transparent h-auto p-0 gap-8">
              <TabsTrigger
                value="description"
                className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              >
                Shipping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground">{product.description}</p>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                  Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Premium quality materials</li>
                  <li>Designed for comfort and durability</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Perfect for everyday use</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div
                    key={review}
                    className="p-4 rounded-xl bg-secondary/50 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          JD
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">John Doe</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-warning text-warning"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Absolutely love this product! The quality exceeded my
                      expectations and the shipping was fast.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We offer free standard shipping on all orders over $50. Orders
                  are processed within 1-2 business days.
                </p>
                <ul className="space-y-2">
                  <li>• Standard Shipping (5-7 business days): Free over $50</li>
                  <li>• Express Shipping (2-3 business days): $12.99</li>
                  <li>• Next Day Delivery: $24.99</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;

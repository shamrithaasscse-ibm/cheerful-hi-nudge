export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400", productCount: 156 },
  { id: "fashion", name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400", productCount: 324 },
  { id: "home", name: "Home & Living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400", productCount: 89 },
  { id: "beauty", name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", productCount: 201 },
  { id: "sports", name: "Sports", image: "https://images.unsplash.com/photo-1461896836934- voices8?w=400", productCount: 78 },
  { id: "books", name: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400", productCount: 445 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise cancellation technology, 40-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music lovers and professionals alike.",
    price: 299,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
    ],
    category: "electronics",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    tags: ["wireless", "noise-cancelling", "premium"],
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    description: "Elegance meets functionality in this minimalist leather watch. Swiss movement, sapphire crystal glass, and genuine Italian leather strap. Water-resistant up to 50 meters.",
    price: 189,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    ],
    category: "fashion",
    rating: 4.9,
    reviews: 856,
    inStock: true,
    tags: ["luxury", "minimalist", "leather"],
    featured: true,
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    description: "Transform your home with our AI-powered smart speaker. Crystal-clear 360° sound, voice assistant integration, and seamless multi-room audio support.",
    price: 149,
    originalPrice: 199,
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600",
    ],
    category: "electronics",
    rating: 4.6,
    reviews: 2341,
    inStock: true,
    tags: ["smart", "AI", "speaker"],
    trending: true,
  },
  {
    id: "4",
    name: "Organic Face Serum",
    description: "Revitalize your skin with our organic vitamin C face serum. Made with natural ingredients, this serum brightens, hydrates, and protects against environmental damage.",
    price: 59,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
    ],
    category: "beauty",
    rating: 4.7,
    reviews: 1892,
    inStock: true,
    tags: ["organic", "skincare", "vitamin-c"],
    featured: true,
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description: "Make a statement with these designer sunglasses. UV400 protection, polarized lenses, and a lightweight titanium frame for all-day comfort.",
    price: 245,
    originalPrice: 320,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    ],
    category: "fashion",
    rating: 4.5,
    reviews: 634,
    inStock: true,
    tags: ["designer", "UV-protection", "polarized"],
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    description: "Work in comfort with our ergonomic office chair. Adjustable lumbar support, breathable mesh back, and 4D armrests for the perfect sitting position.",
    price: 449,
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600",
    ],
    category: "home",
    rating: 4.8,
    reviews: 1123,
    inStock: true,
    tags: ["ergonomic", "office", "comfort"],
    trending: true,
  },
  {
    id: "7",
    name: "Running Shoes Pro",
    description: "Engineered for performance, these running shoes feature responsive cushioning, breathable mesh upper, and superior grip for any terrain.",
    price: 159,
    originalPrice: 189,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    ],
    category: "sports",
    rating: 4.7,
    reviews: 2156,
    inStock: true,
    tags: ["running", "performance", "breathable"],
    featured: true,
  },
  {
    id: "8",
    name: "Ceramic Pour-Over Set",
    description: "Craft the perfect cup with our artisan ceramic pour-over coffee set. Includes dripper, carafe, and filter papers. Made by local artisans.",
    price: 79,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    ],
    category: "home",
    rating: 4.9,
    reviews: 445,
    inStock: true,
    tags: ["ceramic", "artisan", "coffee"],
  },
  {
    id: "9",
    name: "Wireless Earbuds Elite",
    description: "Compact and powerful wireless earbuds with active noise cancellation, transparency mode, and 8-hour battery life per charge.",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
    ],
    category: "electronics",
    rating: 4.6,
    reviews: 3421,
    inStock: true,
    tags: ["wireless", "compact", "ANC"],
    trending: true,
  },
  {
    id: "10",
    name: "Cashmere Scarf",
    description: "Wrap yourself in luxury with our 100% pure cashmere scarf. Incredibly soft, lightweight, and warm. Available in multiple colors.",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    ],
    category: "fashion",
    rating: 4.8,
    reviews: 567,
    inStock: true,
    tags: ["cashmere", "luxury", "winter"],
  },
  {
    id: "11",
    name: "Smart Fitness Tracker",
    description: "Track your health and fitness with precision. Heart rate monitoring, sleep tracking, GPS, and 7-day battery life in a sleek design.",
    price: 129,
    originalPrice: 169,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600",
    ],
    category: "electronics",
    rating: 4.5,
    reviews: 1876,
    inStock: true,
    tags: ["fitness", "smart", "health"],
  },
  {
    id: "12",
    name: "Botanical Candle Set",
    description: "Hand-poured soy candles infused with natural botanical scents. Set of 3 includes Lavender Fields, Ocean Breeze, and Forest Pine.",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600",
    ],
    category: "home",
    rating: 4.7,
    reviews: 892,
    inStock: true,
    tags: ["soy", "botanical", "handmade"],
    featured: true,
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(p => p.trending);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  Plus,
  Search,
  Edit,
  Trash2,
  ChevronLeft,
  BarChart3,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+15.3%",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      value: products.length.toString(),
      change: "+4.5%",
      icon: Package,
    },
    {
      title: "Customers",
      value: "8,945",
      change: "+12.7%",
      icon: Users,
    },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteProduct = (productId: string) => {
    toast({
      title: "Product deleted",
      description: "The product has been removed successfully.",
    });
  };

  const handleSaveProduct = () => {
    toast({
      title: "Product saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card hidden lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
            <Link to="/" className="text-xl font-display font-bold text-foreground">
              Luxe<span className="text-primary">.</span>
            </Link>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
              Admin
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to Store */}
          <div className="p-4 border-t border-border">
            <Link to="/">
              <Button variant="outline" className="w-full gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Store
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-muted-foreground">
              Manage your store and view analytics
            </p>
          </div>
          <Link to="/" className="lg:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Store
            </Button>
          </Link>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-success flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-card rounded-xl border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">
                  Recent Orders
                </h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((order) => (
                    <TableRow key={order}>
                      <TableCell className="font-medium">
                        #ORD-{1000 + order}
                      </TableCell>
                      <TableCell>Customer {order}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs font-medium bg-success/10 text-success rounded-full">
                          Completed
                        </span>
                      </TableCell>
                      <TableCell>${(Math.random() * 500).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Products Content */}
        {activeTab === "products" && (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary gap-2">
                    <Plus className="h-4 w-4" />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input id="name" placeholder="Enter product name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Enter product description"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input id="image" placeholder="https://..." />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button className="btn-primary" onClick={handleSaveProduct}>
                      Save Product
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Products Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg overflow-hidden bg-secondary">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium line-clamp-1">
                            {product.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="capitalize">
                        {product.category}
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "px-2 py-1 text-xs font-medium rounded-full",
                            product.inStock
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                          )}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === "orders" ||
          activeTab === "customers" ||
          activeTab === "settings") && (
          <div className="bg-card rounded-xl border border-border p-12 text-center">
            <p className="text-muted-foreground">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management
              coming soon...
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;

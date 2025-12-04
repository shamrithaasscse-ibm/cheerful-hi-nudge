import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Truck, Shield, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
    setIsProcessing(false);
    navigate("/");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const tax = total * 0.08;
  const grandTotal = total + tax;

  return (
    <Layout>
      <div className="container-custom py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Address
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </h2>

                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3 mb-6"
                >
                  <div
                    className={cn(
                      "flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer",
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                    )}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      Credit / Debit Card
                    </Label>
                    <div className="flex gap-2">
                      <div className="h-6 w-10 bg-muted rounded" />
                      <div className="h-6 w-10 bg-muted rounded" />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer",
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                    )}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          required
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          required
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4 p-3 bg-secondary/50 rounded-lg">
                  <Shield className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">
                    Your payment information is secure and encrypted
                  </span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-success">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border my-4" />

                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary"
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Place Order
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;

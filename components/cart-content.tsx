"use client"

import { useCart } from "@/lib/cart-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center py-12">
          <ShoppingBag size={64} className="mx-auto text-foreground/30 mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-foreground/70 mb-8">Start shopping to support West Bengal's amazing artisans</p>
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card className="divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="p-6 flex gap-6">
                <div className="flex-1">
                  <Link href={`/artisans/${item.artisanId}`}>
                    <p className="text-sm text-primary/70 font-medium mb-1 hover:text-primary transition">
                      {item.artisan}
                    </p>
                  </Link>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">₹{item.price}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        className="px-3 py-2 text-foreground/70 hover:bg-muted"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 border-l border-r border-border">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="px-3 py-2 text-foreground/70 hover:bg-muted"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-red-500 hover:text-red-700 transition flex items-center gap-2"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-foreground/70 mb-2">Subtotal</p>
                  <p className="text-2xl font-bold text-primary">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </Card>

          <div className="mt-6">
            <Link href="/shop">
              <Button variant="outline" className="w-full bg-transparent">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-6 sticky top-20">
            <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-foreground/70">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Tax (estimated)</span>
                <span>₹{Math.round(total * 0.05)}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold text-primary mb-6">
              <span>Total</span>
              <span>₹{Math.round(total * 1.05)}</span>
            </div>

            <div className="space-y-3">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Proceed to Checkout
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-primary">100% Direct to Artisans</span>
                <br />
                Your purchase directly supports West Bengal's craftspeople and their families.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

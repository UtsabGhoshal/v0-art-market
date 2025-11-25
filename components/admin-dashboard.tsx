"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { Eye, Trash2, Edit, Plus, TrendingUp, Package, ShoppingCart, Users } from "lucide-react"

// Mock data
const salesData = [
  { month: "Jan", sales: 45000, orders: 12 },
  { month: "Feb", sales: 52000, orders: 15 },
  { month: "Mar", sales: 48000, orders: 14 },
  { month: "Apr", sales: 61000, orders: 18 },
  { month: "May", sales: 55000, orders: 16 },
  { month: "Jun", sales: 67000, orders: 22 },
]

const recentOrders = [
  {
    id: 1,
    customerName: "Amit Kumar",
    product: "Durga Puja Idol Set",
    amount: 4500,
    date: "2024-01-15",
    status: "Delivered",
  },
  {
    id: 2,
    customerName: "Priya Singh",
    product: "Bengal Cotton Saree",
    amount: 8500,
    date: "2024-01-14",
    status: "Shipped",
  },
  {
    id: 3,
    customerName: "Rajesh Patel",
    product: "Shola Crown - Premium",
    amount: 6500,
    date: "2024-01-13",
    status: "Processing",
  },
  {
    id: 4,
    customerName: "Neha Gupta",
    product: "Clay Doll Set",
    amount: 3200,
    date: "2024-01-12",
    status: "Delivered",
  },
  {
    id: 5,
    customerName: "Vikram Das",
    product: "Handwoven Dhoti",
    amount: 3500,
    date: "2024-01-11",
    status: "Processing",
  },
]

const products = [
  {
    id: 1,
    name: "Durga Puja Idol Set",
    price: 4500,
    stock: 12,
    sales: 45,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
  {
    id: 2,
    name: "Village Life Diorama",
    price: 3200,
    stock: 8,
    sales: 32,
    image: 'url("/public/clay-art-sculptures.jpg")',
  },
  {
    id: 3,
    name: "Farmer & Cow Sculpture",
    price: 2800,
    stock: 15,
    sales: 28,
    image: 'url("/public/clay-art-sculptures.jpg")',
  },
  {
    id: 4,
    name: "Kali Idol - Festival Edition",
    price: 5500,
    stock: 5,
    sales: 52,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Shipped":
      return "bg-blue-100 text-blue-800"
    case "Processing":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingProduct, setEditingProduct] = useState<number | null>(null)

  const totalRevenue = recentOrders.reduce((sum, order) => sum + order.amount, 0)
  const totalOrders = recentOrders.length
  const totalCustomers = new Set(recentOrders.map((o) => o.customerName)).size

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Artisan Dashboard</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Revenue</h3>
                <TrendingUp className="text-primary" size={20} />
              </div>
              <p className="text-3xl font-bold text-primary">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-foreground/60 mt-2">+12% from last month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Orders</h3>
                <ShoppingCart className="text-primary" size={20} />
              </div>
              <p className="text-3xl font-bold text-primary">{totalOrders}</p>
              <p className="text-xs text-foreground/60 mt-2">This month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground/70">Total Customers</h3>
                <Users className="text-primary" size={20} />
              </div>
              <p className="text-3xl font-bold text-primary">{totalCustomers}</p>
              <p className="text-xs text-foreground/60 mt-2">Unique buyers</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground/70">Products</h3>
                <Package className="text-primary" size={20} />
              </div>
              <p className="text-3xl font-bold text-primary">{products.length}</p>
              <p className="text-xs text-foreground/60 mt-2">Listed items</p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-primary mb-6">Sales Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-primary mb-6">Monthly Orders</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="var(--primary)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary">Your Products</h2>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus size={18} />
              Add New Product
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground/70">Product</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground/70">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground/70">Stock</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground/70">Sales</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground/70">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-muted/50 transition">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-primary">₹{product.price}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${product.stock > 10 ? "bg-green-100 text-green-800" : product.stock > 5 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                      >
                        {product.stock} units
                      </span>
                    </td>
                    <td className="py-4 px-4 text-foreground/70">{product.sales} sold</td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-muted rounded transition" title="Edit">
                          <Edit size={18} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded transition" title="View">
                          <Eye size={18} className="text-foreground/60" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded transition" title="Delete">
                          <Trash2 size={18} className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Recent Orders</h2>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-xs text-foreground/60 font-medium mb-1">Order ID</p>
                    <p className="font-semibold text-foreground">#{order.id.toString().padStart(4, "0")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 font-medium mb-1">Customer</p>
                    <p className="font-medium text-foreground">{order.customerName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 font-medium mb-1">Product</p>
                    <p className="text-sm text-foreground">{order.product}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 font-medium mb-1">Amount</p>
                    <p className="font-bold text-primary">₹{order.amount}</p>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <p className="text-xs text-foreground/60 font-medium mb-1">Status</p>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Account Settings</h2>

          <Card className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Artisan Profile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Artisan Name</label>
                  <Input defaultValue="Radha Pal" className="max-w-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <Input defaultValue="Krishnanagar, Nadia District" className="max-w-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    defaultValue="Fourth generation clay artist creating lifelike matir putul inspired by mythology and daily life."
                    className="w-full max-w-2xl p-3 border border-border rounded-lg text-foreground"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Bank Details (for Payouts)</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Account Holder Name</label>
                  <Input placeholder="Enter your name" className="max-w-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bank Account Number</label>
                  <Input type="password" placeholder="••••••••" className="max-w-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">IFSC Code</label>
                  <Input placeholder="e.g., SBIN0000001" className="max-w-md" />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Shipping Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm text-foreground">Enable free shipping to all of India</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm text-foreground">Handle packaging and shipping myself</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8 border-t border-border">
              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

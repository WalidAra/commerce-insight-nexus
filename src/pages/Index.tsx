
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

// This is the landing page that describes the project
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>ECommNext - E-Commerce Dashboard</title>
      </Helmet>

      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6 text-dashboard-blue" />
            <span className="text-xl font-bold">ECommNext</span>
          </div>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">E-Commerce Next.js Dashboard</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {/* TP N°2: Presentation - mission statement */}
          A comprehensive admin panel for managing your e-commerce business with real-time insights, 
          role-based access, and powerful analytics.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg" className="gap-2">
              Explore Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dashboard Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* TP N°2: Functions - These cards describe the main functionality */}
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add, edit, and manage user accounts with role-based permissions for different access levels.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monitor orders in real-time, update status, and manage the entire fulfillment process.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Product Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Organize your products, manage inventory, pricing, and categories with ease.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sales Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Visualize your business performance with customizable reports and exportable data.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Role-Based Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tailored interfaces for Admins, Managers, and Analysts with relevant permissions and data.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Track essential metrics like sales volume, cart abandonment, and customer acquisition rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Technologies</h2>
          
          {/* TP N°2: Structure & Construction Steps */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Next.js 14</CardTitle>
              </CardHeader>
              <CardContent>
                <p>With App Directory, React Server Components and more</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Responsive utility-first CSS framework</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Prisma ORM</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Type-safe database client for TypeScript & Node.js</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Recharts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Interactive charts for data visualization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dashboard-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your e-commerce management?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Get started with the most comprehensive admin dashboard solution for your business.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary">
              Explore the Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xl font-bold">ECommNext</span>
            </div>
            <div>
              <p>© 2023 ECommNext. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center items-center p-4">
      <div className="mb-6 flex items-center">
        <ShoppingCart className="h-8 w-8 text-dashboard-blue mr-2" />
        <h1 className="text-2xl font-bold">ECommNext</h1>
      </div>
      
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-dashboard-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. The page might have been removed, 
          renamed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

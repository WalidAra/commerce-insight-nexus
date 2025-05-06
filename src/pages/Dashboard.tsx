
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import SalesChart from '@/components/dashboard/SalesChart';
import OrdersTable from '@/components/dashboard/OrdersTable';
import TopProducts from '@/components/dashboard/TopProducts';
import { ShoppingCart, Users, Package, ArrowUpRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // This function would handle exporting reports
  const handleExportReport = (format: 'csv' | 'pdf') => {
    console.log(`Exporting report as ${format}`);
    // In a real app, this would trigger a download
    alert(`Your ${format.toUpperCase()} report is being generated!`);
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Dashboard - ECommNext</title>
      </Helmet>
      
      {/* Page header with export buttons */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your store's performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => handleExportReport('csv')}
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => handleExportReport('pdf')}
          >
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>
      
      {/* Key metrics cards - TP N°2: Indicators */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Sales"
          value="$24,325.79"
          description="vs. $20,652.00 last month"
          trend={{ value: 18, isPositive: true }}
          icon={<ArrowUpRight />}
        />
        <StatsCard
          title="Order Volume"
          value="432"
          description="vs. 389 last month"
          trend={{ value: 11, isPositive: true }}
          icon={<ShoppingCart />}
        />
        <StatsCard
          title="New Customers"
          value="64"
          description="vs. 42 last month"
          trend={{ value: 52, isPositive: true }}
          icon={<Users />}
        />
        <StatsCard
          title="Cart Abandonment"
          value="28.3%"
          description="vs. 32.6% last month"
          trend={{ value: 13, isPositive: true }}
          icon={<Package />}
        />
      </div>
      
      {/* Sales Chart */}
      <div className="mb-8">
        <SalesChart 
          title="Sales Overview" 
          description="Total sales by month"
        />
      </div>
      
      {/* Orders and Top Products */}
      <div className="grid gap-6 md:grid-cols-2">
        <OrdersTable 
          onViewOrder={(id) => navigate(`/orders/${id}`)}
        />
        <TopProducts />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

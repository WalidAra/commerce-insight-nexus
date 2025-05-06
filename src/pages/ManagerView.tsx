
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/dashboard/StatsCard';
import SalesChart from '@/components/dashboard/SalesChart';
import OrdersTable from '@/components/dashboard/OrdersTable';
import TopProducts from '@/components/dashboard/TopProducts';
import { Download, TrendingUp, ClipboardCheck, Users, ShoppingBag } from 'lucide-react';

// Sample data for inventory issues
const inventoryIssues = [
  { product: 'Smartphone X1', issue: 'Low stock', quantity: 5, threshold: 10 },
  { product: 'Smart Watch', issue: 'Out of stock', quantity: 0, threshold: 5 },
  { product: 'Laptop Pro', issue: 'Near threshold', quantity: 12, threshold: 10 },
];

const ManagerView = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Manager View - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <ClipboardCheck className="h-10 w-10 mr-3 text-dashboard-blue" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manager Dashboard</h1>
            <p className="text-muted-foreground">
              Operational metrics and inventory management
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Manager stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Pending Orders"
          value="32"
          description="12 require attention"
          trend={{ value: 8, isPositive: false }}
          icon={<ShoppingBag />}
        />
        <StatsCard
          title="Today's Sales"
          value="$3,240"
          description="vs. $2,890 yesterday"
          trend={{ value: 12, isPositive: true }}
          icon={<TrendingUp />}
        />
        <StatsCard
          title="Inventory Items"
          value="842"
          description="18 low stock items"
          trend={{ value: 5, isPositive: false }}
          icon={<ShoppingBag />}
        />
        <StatsCard
          title="New Customers"
          value="14"
          description="Today's signups"
          trend={{ value: 25, isPositive: true }}
          icon={<Users />}
        />
      </div>
      
      {/* Orders and alerts */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <OrdersTable 
          title="Recent Orders"
          description="Orders requiring attention"
        />
        
        <Card>
          <CardHeader>
            <CardTitle>Inventory Alerts</CardTitle>
            <CardDescription>Products requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventoryIssues.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">{item.product}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.issue} - {item.quantity} remaining (threshold: {item.threshold})
                    </div>
                  </div>
                  <Button size="sm">Restock</Button>
                </div>
              ))}
              <Button className="w-full mt-2" variant="outline">
                View All Inventory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales and products */}
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart 
          title="Weekly Sales"
          description="Sales trend for the last 7 days"
        />
        
        <TopProducts 
          title="Top Selling Products"
          description="Best performers this week"
        />
      </div>
    </DashboardLayout>
  );
};

export default ManagerView;

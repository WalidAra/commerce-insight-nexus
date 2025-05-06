
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsCard from '@/components/dashboard/StatsCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Download, TrendingUp, PieChart as PieChartIcon, BarChart as BarChartIcon, Users } from 'lucide-react';

// Sample data for charts
const salesByCategory = [
  { name: 'Electronics', value: 45 },
  { name: 'Clothing', value: 25 },
  { name: 'Home', value: 15 },
  { name: 'Sports', value: 10 },
  { name: 'Other', value: 5 },
];

const customerAcquisition = [
  { name: 'Organic', value: 35 },
  { name: 'Social Media', value: 30 },
  { name: 'Referral', value: 20 },
  { name: 'Paid Ads', value: 15 },
];

const monthlyRevenue = [
  { month: 'Jan', revenue: 10000 },
  { month: 'Feb', revenue: 12000 },
  { month: 'Mar', revenue: 18000 },
  { month: 'Apr', revenue: 14000 },
  { month: 'May', revenue: 22000 },
  { month: 'Jun', revenue: 19000 },
];

// Colors for pie charts
const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f97316'];

const AnalystView = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Analyst View - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <BarChartIcon className="h-10 w-10 mr-3 text-dashboard-blue" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              In-depth data analysis and reporting
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Analyst stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Conversion Rate"
          value="6.4%"
          description="vs. 5.8% last month"
          trend={{ value: 10, isPositive: true }}
          icon={<TrendingUp />}
        />
        <StatsCard
          title="Cart Abandonment"
          value="28.3%"
          description="vs. 32.6% last month"
          trend={{ value: 13, isPositive: true }}
          icon={<TrendingUp />}
        />
        <StatsCard
          title="Avg. Order Value"
          value="$86.24"
          description="vs. $79.18 last month"
          trend={{ value: 9, isPositive: true }}
          icon={<TrendingUp />}
        />
        <StatsCard
          title="Customer Retention"
          value="67.8%"
          description="vs. 64.2% last month"
          trend={{ value: 5.6, isPositive: true }}
          icon={<Users />}
        />
      </div>
      
      {/* Analytics Tabs */}
      <Tabs defaultValue="sales" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Sales performance over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyRevenue}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Products Analysis</CardTitle>
              <CardDescription>Product analytics would go here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Product analytics content</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
              <CardDescription>Customer analytics would go here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Customer analytics content</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="marketing">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Performance</CardTitle>
              <CardDescription>Marketing analytics would go here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Marketing analytics content</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Distribution charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>Distribution of sales across categories</CardDescription>
            </div>
            <PieChartIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {salesByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Customer Acquisition</CardTitle>
              <CardDescription>How customers find our store</CardDescription>
            </div>
            <PieChartIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerAcquisition}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {customerAcquisition.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AnalystView;

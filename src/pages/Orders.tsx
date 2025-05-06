
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Eye, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample data
const orders = [
  { id: '1001', customer: 'John Smith', date: '2023-05-01', total: '$129.99', status: 'DELIVERED', items: 3 },
  { id: '1002', customer: 'Sarah Johnson', date: '2023-05-02', total: '$79.99', status: 'SHIPPED', items: 1 },
  { id: '1003', customer: 'Mike Williams', date: '2023-05-03', total: '$249.99', status: 'PROCESSING', items: 2 },
  { id: '1004', customer: 'Emily Davis', date: '2023-05-04', total: '$349.99', status: 'PENDING', items: 4 },
  { id: '1005', customer: 'Chris Taylor', date: '2023-05-05', total: '$59.99', status: 'CANCELED', items: 1 },
];

const Orders = () => {
  const navigate = useNavigate();

  // Function to handle view order
  const handleViewOrder = (id: string) => {
    // In a real app, this would navigate to the order details page
    console.log(`Viewing order ${id}`);
    navigate(`/orders/${id}`);
  };

  // Function to get the badge color based on order status
  const getStatusBadgeColor = (status: string): string => {
    switch (status) {
      case 'DELIVERED':
        return 'bg-green-500';
      case 'SHIPPED':
        return 'bg-blue-500';
      case 'PROCESSING':
        return 'bg-yellow-500';
      case 'PENDING':
        return 'bg-purple-500';
      case 'CANCELED':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Orders - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Track and manage all customer orders
          </p>
        </div>
        <Button className="gap-2" variant="outline">
          <Download className="h-4 w-4" />
          Export Orders
        </Button>
      </div>
      
      {/* Search and filter bar */}
      <div className="flex items-center mb-6 gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search orders by ID or customer..."
            className="pl-8 w-full"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Date Range</Button>
      </div>
      
      {/* Orders table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewOrder(order.id)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination would go here */}
      <div className="flex items-center justify-end mt-4 space-x-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Orders;

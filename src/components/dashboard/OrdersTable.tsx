
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample data
const defaultOrders = [
  { id: '1234', customer: 'Alice Brown', total: '$129.99', status: 'DELIVERED', date: '2023-05-01' },
  { id: '1235', customer: 'Bob Smith', total: '$59.99', status: 'SHIPPED', date: '2023-05-05' },
  { id: '1236', customer: 'Carol White', total: '$99.99', status: 'PROCESSING', date: '2023-05-07' },
  { id: '1237', customer: 'Dave Johnson', total: '$249.99', status: 'PENDING', date: '2023-05-09' },
  { id: '1238', customer: 'Eve Davis', total: '$19.99', status: 'CANCELED', date: '2023-05-10' },
];

interface Order {
  id: string;
  customer: string;
  total: string;
  status: string;
  date: string;
}

interface OrdersTableProps {
  title?: string;
  description?: string;
  orders?: Order[];
  onViewOrder?: (id: string) => void;
}

const OrdersTable = ({
  title = "Recent Orders",
  description = "View and manage the latest orders",
  orders = defaultOrders,
  onViewOrder,
}: OrdersTableProps) => {
  
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge className={cn(getStatusBadgeColor(order.status))}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onViewOrder && onViewOrder(order.id)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;

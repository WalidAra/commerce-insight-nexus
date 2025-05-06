
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Sample data
const defaultProducts = [
  { name: 'Smartphone X1', sales: 1245, percentage: 100 },
  { name: 'Wireless Earbuds', sales: 876, percentage: 70 },
  { name: 'Smart Watch', sales: 654, percentage: 52 },
  { name: 'Laptop Pro', sales: 543, percentage: 43 },
  { name: 'Bluetooth Speaker', sales: 421, percentage: 34 },
];

interface Product {
  name: string;
  sales: number;
  percentage: number;
}

interface TopProductsProps {
  products?: Product[];
  title?: string;
  description?: string;
}

const TopProducts = ({
  products = defaultProducts,
  title = "Top Products",
  description = "Best selling products this month",
}: TopProductsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-muted-foreground">{product.sales} units</div>
              </div>
              <Progress value={product.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopProducts;

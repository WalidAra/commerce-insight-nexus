
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, Package, Edit, Trash, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample data
const products = [
  { 
    id: '1', 
    name: 'Smartphone X1', 
    price: '$999.99', 
    category: 'Electronics',
    inventory: 45,
    status: 'In Stock'
  },
  { 
    id: '2', 
    name: 'Wireless Earbuds', 
    price: '$149.99', 
    category: 'Electronics',
    inventory: 78,
    status: 'In Stock'
  },
  { 
    id: '3', 
    name: 'Smart Watch', 
    price: '$299.99', 
    category: 'Electronics',
    inventory: 12,
    status: 'Low Stock'
  },
  { 
    id: '4', 
    name: 'Laptop Pro', 
    price: '$1499.99', 
    category: 'Computers',
    inventory: 23,
    status: 'In Stock'
  },
  { 
    id: '5', 
    name: 'Bluetooth Speaker', 
    price: '$79.99', 
    category: 'Audio',
    inventory: 0,
    status: 'Out of Stock'
  },
];

const Products = () => {
  // Function to handle product deletion
  const handleDeleteProduct = (id: string) => {
    console.log(`Delete product with ID: ${id}`);
    // In a real app, this would call an API to delete the product
    alert(`Product with ID ${id} would be deleted!`);
  };

  // Function to handle product editing
  const handleEditProduct = (id: string) => {
    console.log(`Edit product with ID: ${id}`);
    // In a real app, this would navigate to an edit page or open a modal
    alert(`Edit product with ID: ${id}`);
  };

  // Function to get the badge color based on product status
  const getStatusBadgeColor = (status: string): string => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-500';
      case 'Low Stock':
        return 'bg-yellow-500';
      case 'Out of Stock':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Product Catalog - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Catalog</h1>
          <p className="text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>
      
      {/* Search and filter bar */}
      <div className="flex items-center mb-6 gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 w-full"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Categories</Button>
      </div>
      
      {/* Products table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Inventory</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    {product.name}
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.inventory}</TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeColor(product.status)}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditProduct(product.id)}
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-800 hover:bg-red-100"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
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

export default Products;

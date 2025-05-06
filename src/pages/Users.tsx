
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, Edit, Trash } from 'lucide-react';

// Sample data
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'ADMIN', createdAt: '2023-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'MANAGER', createdAt: '2023-02-20' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'ANALYST', createdAt: '2023-03-10' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'USER', createdAt: '2023-04-05' },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'USER', createdAt: '2023-05-18' },
];

const Users = () => {
  // Function to handle user deletion
  const handleDeleteUser = (id: string) => {
    console.log(`Delete user with ID: ${id}`);
    // In a real app, this would call an API to delete the user
    alert(`User with ID ${id} would be deleted!`);
  };

  // Function to handle user editing
  const handleEditUser = (id: string) => {
    console.log(`Edit user with ID: ${id}`);
    // In a real app, this would navigate to an edit page or open a modal
    alert(`Edit user with ID: ${id}`);
  };

  // Function to get the badge color based on user role
  const getRoleBadgeColor = (role: string): string => {
    switch (role) {
      case 'ADMIN':
        return 'bg-red-500';
      case 'MANAGER':
        return 'bg-blue-500';
      case 'ANALYST':
        return 'bg-green-500';
      case 'USER':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>User Management - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Add, edit, and manage user accounts
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>
      
      {/* Search and filter bar */}
      <div className="flex items-center mb-6 gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="pl-8 w-full"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      
      {/* Users table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className={getRoleBadgeColor(user.role)}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditUser(user.id)}
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-800 hover:bg-red-100"
                    onClick={() => handleDeleteUser(user.id)}
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

export default Users;

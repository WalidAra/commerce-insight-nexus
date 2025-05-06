
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsCard from '@/components/dashboard/StatsCard';
import SalesChart from '@/components/dashboard/SalesChart';
import OrdersTable from '@/components/dashboard/OrdersTable';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, Settings, Shield, ArrowUpRight, Download } from 'lucide-react';

// Sample data
const recentActivity = [
  { id: 1, action: 'User created', user: 'admin', target: 'jane@example.com', time: '5 min ago' },
  { id: 2, action: 'Permission changed', user: 'admin', target: 'bob@example.com', time: '10 min ago' },
  { id: 3, action: 'Role updated', user: 'admin', target: 'alice@example.com', time: '25 min ago' },
  { id: 4, action: 'System settings updated', user: 'admin', target: 'Email Config', time: '1 hour ago' },
  { id: 5, action: 'User deleted', user: 'admin', target: 'deleted-user@example.com', time: '2 days ago' },
];

const AdminView = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Admin View - ECommNext</title>
      </Helmet>
      
      {/* Page header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Shield className="h-10 w-10 mr-3 text-dashboard-blue" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Complete system administration and control
            </p>
          </div>
        </div>
        <Button className="gap-2">
          <Settings className="h-4 w-4" />
          System Settings
        </Button>
      </div>

      {/* Admin stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Users"
          value="254"
          description="21 new this month"
          trend={{ value: 8, isPositive: true }}
          icon={<Users />}
        />
        <StatsCard
          title="Active Users"
          value="187"
          description="74% of total users"
          trend={{ value: 12, isPositive: true }}
          icon={<ArrowUpRight />}
        />
        <StatsCard
          title="System Health"
          value="98%"
          description="No critical issues"
          trend={{ value: 2, isPositive: true }}
          icon={<ArrowUpRight />}
        />
        <StatsCard
          title="Total Revenue"
          value="$128,540"
          description="12% more than last month"
          trend={{ value: 12, isPositive: true }}
          icon={<ArrowUpRight />}
        />
      </div>

      {/* Admin tabs */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest admin actions in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivity.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">
                          {activity.action}
                        </TableCell>
                        <TableCell>{activity.user}</TableCell>
                        <TableCell>{activity.target}</TableCell>
                        <TableCell>{activity.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current platform performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>API Server</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Authentication Service</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Storage System</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Service</span>
                    <Badge className="bg-yellow-500">Degraded</Badge>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download System Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage all system users and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>User management interface would be here</p>
              <Button className="mt-4">View Full User Management</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle>Role & Permission Management</CardTitle>
              <CardDescription>Configure access controls for the system</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Permissions and roles interface would be here</p>
              <Button className="mt-4">Manage Permissions</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>View detailed system activity and error logs</CardDescription>
            </CardHeader>
            <CardContent>
              <p>System logs interface would be here</p>
              <Button className="mt-4">View All Logs</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Sales overview */}
        <SalesChart 
          title="Revenue Overview" 
          description="Total revenue by month"
        />
        
        {/* Recent orders */}
        <OrdersTable 
          title="Recent Orders"
          description="Monitor recent transactions"
        />
      </div>
    </DashboardLayout>
  );
};

export default AdminView;

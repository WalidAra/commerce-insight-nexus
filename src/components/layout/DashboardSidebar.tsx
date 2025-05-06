
import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  Settings,
  ChartBar,
  LogOut,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  title: string;
  active?: boolean;
}

const SidebarLink = ({ href, icon: Icon, title, active }: SidebarLinkProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
      active 
        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    )}
  >
    <Icon className="h-5 w-5" />
    <span>{title}</span>
  </Link>
);

interface DashboardSidebarProps {
  activePath?: string;
  userRole?: string;
  onLogout?: () => void;
}

const DashboardSidebar = ({ 
  activePath = '/', 
  userRole = 'ANALYST',
  onLogout
}: DashboardSidebarProps) => {
  // Define the visible links based on user role
  const isAdmin = userRole === 'ADMIN';
  const isManager = userRole === 'ADMIN' || userRole === 'MANAGER';
  const isAnalyst = userRole === 'ADMIN' || userRole === 'MANAGER' || userRole === 'ANALYST';

  return (
    <div className="h-full flex flex-col border-r bg-sidebar">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-sidebar-foreground flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          ECommNext
        </h2>
        <p className="text-sm text-sidebar-foreground/70 mt-1">E-Commerce Dashboard</p>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <nav className="grid gap-1">
          {/* All roles can see dashboard */}
          <SidebarLink 
            href="/" 
            icon={LayoutDashboard} 
            title="Dashboard" 
            active={activePath === '/' || activePath === '/dashboard'} 
          />

          {/* All roles can see products */}
          <SidebarLink 
            href="/products" 
            icon={Package} 
            title="Products" 
            active={activePath?.startsWith('/products')} 
          />

          {/* All roles can see analytics */}
          <SidebarLink 
            href="/analytics" 
            icon={ChartBar} 
            title="Analytics" 
            active={activePath?.startsWith('/analytics')} 
          />

          {/* Manager+ can access orders */}
          {isManager && (
            <SidebarLink 
              href="/orders" 
              icon={ShoppingCart} 
              title="Orders" 
              active={activePath?.startsWith('/orders')} 
            />
          )}

          {/* Admin only can access users */}
          {isAdmin && (
            <SidebarLink 
              href="/users" 
              icon={Users} 
              title="Users" 
              active={activePath?.startsWith('/users')} 
            />
          )}

          {/* Role-specific views */}
          {isAdmin && (
            <SidebarLink 
              href="/admin" 
              icon={User} 
              title="Admin View" 
              active={activePath?.startsWith('/admin')} 
            />
          )}

          {isManager && (
            <SidebarLink 
              href="/manager" 
              icon={User} 
              title="Manager View" 
              active={activePath?.startsWith('/manager')} 
            />
          )}

          <SidebarLink 
            href="/analyst" 
            icon={User} 
            title="Analyst View" 
            active={activePath?.startsWith('/analyst')} 
          />

          {/* Settings - for all users */}
          <SidebarLink 
            href="/settings" 
            icon={Settings} 
            title="Settings" 
            active={activePath?.startsWith('/settings')} 
          />
        </nav>
      </div>

      {/* Logout button */}
      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

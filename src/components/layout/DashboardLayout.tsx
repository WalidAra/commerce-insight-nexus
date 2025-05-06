
import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import { useLocation, useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // This would typically come from an authentication context
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'ADMIN',
  });

  const handleLogout = () => {
    // This would handle the logout logic
    console.log('Logging out');
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block">
        <DashboardSidebar 
          activePath={location.pathname} 
          userRole={user.role}
          onLogout={handleLogout}
        />
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader user={user} onLogout={handleLogout} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

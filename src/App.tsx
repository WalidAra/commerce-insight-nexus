
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import AdminView from "./pages/AdminView";
import ManagerView from "./pages/ManagerView";
import AnalystView from "./pages/AnalystView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet
        titleTemplate="%s - ECommNext"
        defaultTitle="ECommNext - E-Commerce Dashboard"
      >
        <meta name="description" content="Next.js E-Commerce Admin Dashboard" />
      </Helmet>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected dashboard routes - would normally have auth guards */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          
          {/* Role-specific views */}
          <Route path="/admin" element={<AdminView />} />
          <Route path="/manager" element={<ManagerView />} />
          <Route path="/analyst" element={<AnalystView />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

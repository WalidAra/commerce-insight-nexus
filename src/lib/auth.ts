
import { Role } from "@prisma/client";

// Simple utility functions for role-based access control
export function isAdmin(role: Role | undefined): boolean {
  return role === 'ADMIN';
}

export function isManager(role: Role | undefined): boolean {
  return role === 'ADMIN' || role === 'MANAGER';
}

export function isAnalyst(role: Role | undefined): boolean {
  return role === 'ADMIN' || role === 'MANAGER' || role === 'ANALYST';
}

export function getRequiredRoleForRoute(route: string): Role | null {
  // Admin routes
  if (route.includes('/admin')) {
    return 'ADMIN';
  }
  
  // Manager routes
  if (route.includes('/manager')) {
    return 'MANAGER';
  }
  
  // Analyst routes
  if (route.includes('/analyst')) {
    return 'ANALYST';
  }
  
  // Dashboard access requires at least analyst role
  if (route.includes('/dashboard')) {
    return 'ANALYST';
  }
  
  // Public routes
  return null;
}

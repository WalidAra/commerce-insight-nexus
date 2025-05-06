
# E-Commerce Next.js Dashboard

A full-stack admin dashboard for e-commerce businesses built with Next.js, React, Tailwind CSS, and Prisma ORM.

## Project Implementation of TP N°2 Requirements

This project implements all requirements specified in TP N°2:

### 1. Presentation

- **Landing Page**: A branded homepage with the ECommNext logo, mission statement, and an overview of the dashboard features
- **Visual Design**: Consistent blue-themed color palette representing trust and professionalism
- **Brand Identity**: Logo and name "ECommNext" appear throughout the application
- **Mission Statement**: Clear description of the dashboard's purpose for e-commerce management
- **Layout**: Clean, responsive design that works on all device sizes

### 2. Perspectives & Usage

- **Role-Based Access**: Three distinct dashboard views tailored to different roles:
  - **Admin View**: Complete system control with user management and configuration options
  - **Manager View**: Operational focus with inventory management and order processing
  - **Analyst View**: Data analysis with in-depth reporting and visualization tools
- **Permissions System**: Each role has appropriate access levels to features and data
- **Shared Features**: Core functionality available to all roles with role-specific extensions

### 3. Functions

- **User Management**: Complete CRUD operations for user accounts with role assignment
- **Order Tracking**: Real-time order monitoring with status updates and processing tools
- **Product Catalog**: Inventory management with stock tracking and categorization
- **Sales Reporting**: Comprehensive analytics with visual charts and exportable data
- **Authentication**: Secure login system with role-based permissions
- **Data Export**: CSV and PDF export options for reports and data

### 4. Structure & Construction Steps

- **Modular Architecture**: Using Next.js app directory structure with:
  - `components/`: Reusable UI components (charts, tables, cards)
  - `pages/`: Application routes and page components
  - `lib/`: Utility functions and shared logic
- **Database Integration**: Prisma ORM schema for PostgreSQL/MySQL with models for:
  - Users
  - Products
  - Categories
  - Orders
  - OrderItems
- **API Routes**: Backend logic for data operations
- **Authentication**: Login system with session management
- **State Management**: React Query for server state and React hooks for UI state

### 5. Purpose & Advantages

- **Real-time Monitoring**: Dynamic dashboard with live data updates
- **Single Page Application**: Fast navigation between features without page reloads
- **Server-Side Rendering**: Optimized performance and SEO benefits
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Data Visualization**: Interactive charts for better business insights
- **Exportable Reports**: Generate PDF and CSV exports for offline analysis

### 6. Indicators

The dashboard tracks key performance indicators (KPIs) including:

- **Total Sales**: Revenue metrics with trend analysis
- **Order Volume**: Number of orders over time
- **Top Products**: Best-selling products and categories
- **Customer Acquisition**: New vs. returning customer metrics
- **Cart Abandonment**: Tracking of abandoned carts and recovery rates
- **Conversion Rate**: Website visitor to customer conversion percentage

## Technical Stack

- **Frontend**:
  - Next.js 14
  - React
  - Tailwind CSS
  - Recharts for data visualization
  - React Query for data fetching

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL/MySQL database

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables (database connection, auth keys)
4. Run development server: `npm run dev`
5. Access the dashboard at `http://localhost:3000`

## Deployment

The project is ready for deployment on Vercel with proper environment variable configuration.

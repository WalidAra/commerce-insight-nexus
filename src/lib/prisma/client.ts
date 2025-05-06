
// This is a mock implementation until we have a real Prisma setup
// The import from @prisma/client is preserved for type checking

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Check if we're in a production environment
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Use a global variable in development to prevent multiple instances during hot reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

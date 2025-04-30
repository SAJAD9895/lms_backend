// const { PrismaClient } = require('@prisma/client');
// const jwt = require('jsonwebtoken');

// const prisma = new PrismaClient();
// Adjusting the import to use the custom path for the Prisma client
const { PrismaClient } = require('../generated/prisma'); // <-- This is the correct path
const jwt = require('jsonwebtoken');

// Instantiate Prisma client
const prisma = new PrismaClient();

// Your other logic for authentication, etc.

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const createContext = ({ req }) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  let userId;

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.userId;
    } catch (e) {
      // Invalid token
    }
  }

  return { prisma, userId };
};

module.exports = { createContext };

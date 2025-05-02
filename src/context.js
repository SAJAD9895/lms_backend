const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

// Instantiate Prisma Client
const prisma = new PrismaClient();

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

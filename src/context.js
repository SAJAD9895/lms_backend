const jwt = require('jsonwebtoken');
const prisma = require('./prisma/client'); // ← import singleton Prisma
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const createContext = ({ req }) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  let userId = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.userId;
    } catch (e) {
      console.warn('JWT verification failed:', e.message);
    }
  }

  return { prisma, userId };
};

module.exports = { createContext };

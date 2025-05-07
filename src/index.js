// src/index.js for Apollo Server v3

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/typeDefs');
const { Query, Mutation } = require('./graphql/resolvers');
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma client
const prisma = new PrismaClient();

async function startServer() {
  const app = express();
  
  // Apply middleware
  app.use(cors());
  app.use(express.json());

  // Create Apollo Server instance with v3 configuration
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      return { token, prisma };
    },
    // These settings ensure the playground works in production
    introspection: true,
    playground: {
      settings: {
        'editor.theme': 'dark',
        'request.credentials': 'include',
      },
    },
  });

  // Start Apollo Server
  await server.start();

  // Apply Apollo middleware to Express
  server.applyMiddleware({ 
    app,
    path: '/graphql',
    cors: false // We're handling CORS with the express middleware
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`📚 GraphQL Playground available at http://localhost:${PORT}/graphql`);
  });
}

// Start the server
startServer().catch(err => {
  console.error('Failed to start server:', err);
});
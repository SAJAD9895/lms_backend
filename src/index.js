// src/index.js

require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageProductionDefault } = require('@apollo/server/plugin/landingPage/default');
const { typeDefs } = require('./graphql/typeDefs');
const { Query, Mutation } = require('./graphql/resolvers');
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma client
const prisma = new PrismaClient();

async function startServer() {
  const app = express();

  // **Ensure body-parser middleware is used before Apollo Server**
  app.use(express.json());  // this line will help parse JSON requests

  // Create Apollo Server instance
  // const server = new ApolloServer({
  //   typeDefs,  // Ensure typeDefs is properly set
  //   resolvers: {
  //     Query,
  //     Mutation,
  //   },
  //   context: ({ req }) => {
  //     // Optional: add token or other context here
  //     const token = req.headers.authorization || '';
  //     return { token, prisma };  // Pass Prisma client and other context data
  //   },
  //   plugins: [
  //     ApolloServerPluginLandingPageProductionDefault({ embed: true }),
  //   ],
  // });
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
  });

  // Start Apollo Server
  await server.start();

  // Apply Apollo Server middleware to Express
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// Start the server
startServer();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const prisma = require('./lib/prisma'); // Add this import

const app = express();
app.use(cors({
  origin: '*',
  credentials: true
}));

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;
  const serverInstance = app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully');
    await prisma.$disconnect();
    serverInstance.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully');
    await prisma.$disconnect();
    serverInstance.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
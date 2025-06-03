const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client'); // add Prisma import
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const app = express();
const prisma = new PrismaClient();  // initialize Prisma client

app.use(cors({
  origin: '*', // or explicitly allow your domain
  credentials: true
}));

// Add this test route BEFORE startServer
app.get('/test-db', async (req, res) => {
  try {
    await prisma.$connect();
    res.status(200).json({ message: "✅ DB connected" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

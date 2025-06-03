const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { createContext } = require('./context'); // your context file that returns { prisma, userId }

const app = express();

app.use(cors({
  origin: '*', // adjust for your production domains
  credentials: true,
}));

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext, // Pass context function here
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

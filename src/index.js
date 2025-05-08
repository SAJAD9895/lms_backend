const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const app = express();
app.use(cors({
  origin: '*', // or explicitly allow your domain
  credentials: true
}));

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // allows schema introspection
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start(); // Required for Apollo Server v3+
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*', // or explicitly allow your domain
  credentials: true
}));

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // playground: true,
    introspection: true, // allows schema introspection
    // plugins: [
    //   require('apollo-server-core').ApolloServerPluginLandingPageGraphQLPlayground({
    //     settings: {
    //       'request.credentials': 'include',
    //     },
    //   }),
    // ],
  });

  await server.start(); // Required for Apollo Server v3+
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('🚀 Server ready at http://localhost:4000/graphql');
  });
}

startServer();

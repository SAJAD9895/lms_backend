// require('dotenv').config();
// const { ApolloServer } = require('apollo-server');
// const { typeDefs } = require('./typeDefs');
// const { authResolvers } = require('./resolvers/auth');
// const { courseResolvers } = require('./resolvers/course');
// const { createContext } = require('./context');
// const { ApolloServer } = require('apollo-server-express');

// const { merge } = require('lodash');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers: merge(authResolvers, courseResolvers),
//   context: createContext,
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageProductionDefault } = require('apollo-server-core');

const { typeDefs } = require('./typeDefs');
const { authResolvers } = require('./resolvers/auth');
const { courseResolvers } = require('./resolvers/course');
const { createContext } = require('./context');
const { merge } = require('lodash');


async function startServer() {
  const app = express();

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers: merge(authResolvers, courseResolvers),
  //   context: createContext,
  // });
  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers: merge(authResolvers, courseResolvers),
  //   context: createContext,
  //   introspection: true, // enable schema introspection (needed for playground)
  //   playground: true,    // enable GraphQL Playground UI
  //   persistedQueries: false, // optional: remove warning
  // });
  const server = new ApolloServer({
    typeDefs,
    resolvers: merge(authResolvers, courseResolvers),
    context: createContext,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageProductionDefault({
        embed: true, // 👈 Enables the embedded GraphQL UI
      }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

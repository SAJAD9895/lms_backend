require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs');
const { authResolvers } = require('./resolvers/auth');
const { courseResolvers } = require('./resolvers/course');
const { createContext } = require('./context');

const { merge } = require('lodash');

const server = new ApolloServer({
  typeDefs,
  resolvers: merge(authResolvers, courseResolvers),
  context: createContext,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


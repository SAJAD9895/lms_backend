const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    price: Float!
    providerName: String!
  }

  type Enrollment {
    id: ID!
    course: Course!
  }

  type Query {
    getCourses: [Course!]!
    getCourse(id: ID!): Course
    myEnrolledCourses: [Enrollment!]!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addCourse(title: String!, description: String!, price: Float!, providerName: String!): Course!
    enrollInCourse(courseId: ID!): Enrollment!
  }
`;

module.exports = { typeDefs };

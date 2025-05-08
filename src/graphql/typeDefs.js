const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Video {
    id: Int!
    title: String!
    duration: String!
    isPreview: Boolean!
  }

  type Module {
    id: Int!
    title: String!
    videos: [Video!]!
  }

  type Course {
    id: Int!
    title: String!
    description: String!
    thumbnail: String
    price: Float!
    instructor: String!
    instructorRole: String!
    instructorAvatar: String!
    duration: String!
    published: String!
    level: String!
    modules: [Module!]!
  }

  type Enrollment {
    id: Int!
    userUid: String!
    courseId: Int!
    course: Course!
  }

  type CompletedModule {
    id: Int!
    userUid: String!
    moduleId: Int!
    module: Module!
  }

  type User {
    id: Int!
    uid: String!
    name: String!
    phone: String
    role: String
  }

  input AddUserInput {
    uid: String!
    name: String!
    phone: String
    role: String
  }

  input AddCourseInput {
    title: String!
    description: String!
    thumbnail: String
    price: Float!
    instructor: String!
    instructorRole: String!
    instructorAvatar: String!
    duration: String!
    published: String!
    level: String!
    modules: [AddModuleInput!]!
  }

  input AddModuleInput {
    title: String!
    videos: [AddVideoInput!]!
  }

  input AddVideoInput {
    title: String!
    duration: String!
    isPreview: Boolean!
  }

  type Query {
    getCourses: [Course!]!
    getCourse(id: Int!): Course
    getUserEnrollments(userUid: String!): [Enrollment!]!
    getUser(uid: String!): User
  }

  type Mutation {
    addCourse(data: AddCourseInput!): Course!
    enrollUser(userUid: String!, courseId: Int!): Enrollment!
    completeModule(userUid: String!, moduleId: Int!): CompletedModule!
    addUser(uid: String!, name: String!, phone: String, role: String): User!
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Video {
    id: Int!
    title: String!
    duration: String!
    is_preview: Boolean 
    link: String
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
    instructor_role: String
    instructor_avatar: String
    duration: String!
    published: String!
    level: String!
    preview_video: String
    modules: [Module!]!
  }

  type Enrollment {
    id: Int!
    userUid: String    
    courseId: Int      
    enrolledAt: String
  }


  type CompletedModule {
    id: Int!
    userUid: String!
    moduleId: Int!
    module: Module!
  }

  type User {
    uid: String!
    name: String!
    phone: String
    role: String
    mobile: Boolean
    pc: Boolean
    mobile_address: String
    pc_address: String

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
      previewVideo: String
      modules: [AddModuleInput!]!
  }

  input AddModuleInput {
    title: String!
    videos: [AddVideoInput!]!
  }

  input AddVideoInput {
    title: String!
    duration: String!
    isPreview: Boolean
    link: String
  }

  input UpdateCourseInput {
    title: String
    description: String
    thumbnail: String
    price: Float
    instructor: String
    instructorRole: String
    instructorAvatar: String
    duration: String
    published: String
    level: String
    previewVideo: String
    modules: [UpdateModuleInput!]
 }
input UpdateModuleInput {
  id: Int
  title: String!
  videos: [UpdateVideoInput!]!
}
input UpdateVideoInput {
  id: Int
  title: String!
  duration: String!
  isPreview: Boolean
  link: String
}

  input UpdateUserInput {
  name: String
  phone: String
  role: String
  mobile: Boolean
  pc: Boolean
  mobile_address: String
  pc_address: String
}


  type Query {
    getCourses: [Course!]!
    getCourse(id: Int!): Course
    getUserEnrollments(userUid: String!): [Enrollment!]!
    getAllEnrolledUsers: [Enrollment!]!
    getUser(uid: String!): User
    getAllUsers: [User!]!
  }

  type Mutation {
    addCourse(data: AddCourseInput!): Course!
    updateCourse(id: Int!, data: UpdateCourseInput!): Course
    updateUser(uid: String!, data: UpdateUserInput!): User!
    enrollUser(userUid: String!, courseId: Int!): Enrollment!
    completeModule(userUid: String!, moduleId: Int!): CompletedModule!
    addUser(uid: String!, name: String!, phone: String, role: String): User!
    addEnroll(userUid: String!, courseId: Int!): Enrollment!
  }
`;

module.exports = typeDefs;

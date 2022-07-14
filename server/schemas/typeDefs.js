const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: String
    description: String
    bookId: ID!
    image: String
    title: String
  }

  type Query {
    User(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, savedBooks: String!): User
    removeBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

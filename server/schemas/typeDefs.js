const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
    savedBookds: Book
  }

  type Book {
    authors: String
    description: String
    bookId: ID!
    image: String
    title: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    Login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook): User
    removedRook(bookid: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

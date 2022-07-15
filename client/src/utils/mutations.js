import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $authors: String, $description: String, bookId: ID!, image: String, title: String ) {
    saveBook(userId: $userId, authors: $authors, description: $description, bookId: $bookid, image: $image, title: $title) {
      _id
      username
      email
      books
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeSkill(bookId: $bookId) {
      _id
      name
      books
    }
  }
`;
import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUser {
    user {
      _id
      username
      email
      savedBooks
    }
  }
`;

// export const QUERY_

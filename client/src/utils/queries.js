import { gpl } from "@apollo/client";

export const QUERY_USER = gpl`
query getUser {
    user {
        _id
        username
        email
        savedBooks
    }
}`;

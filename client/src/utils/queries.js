import { gpl } from "@apollo/client";

export const QUERY_USERS = gpl`
query getUsers {
    users {
        _id
        email
        password
    }
}`;

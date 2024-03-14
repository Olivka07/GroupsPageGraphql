import { gql } from '@apollo/client';

export const GET_GROUPS = gql`
    query getGroups($start: Int!, $end: Int!) {
        getGroups(start: $start, end: $end) {
            data {
                id
                name
                closed
                avatar_color
                members_count
            }
            result
        }
    }
`;

export const GET_USERS = gql`
    query getUsers($id: ID!) {
        getUsers(id: $id) {
            first_name
            last_name
        }
    }
`;

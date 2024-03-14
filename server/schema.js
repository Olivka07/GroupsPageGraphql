const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type User {
        first_name: String!,
        last_name: String!
    }

    type Group {
        id: ID!,
        name: String!,
        closed: Boolean!,
        avatar_color: String,
        members_count: Int!,
        friends: [User]
    }

    type GetGroupsResponse {
        result: Int!,
        data: [Group]
    }

    type Query {
        getUsers(id: ID!): [User],
        getGroups(start: Int!, end: Int!): GetGroupsResponse
    }
`)

module.exports = schema
import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }

  extend type Mutation {
    signUp(
      username: String!
      email: String!
      password: String!
    ): Token!

    signIn(email: String!, password: String!): Token!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    blogPosts: [BlogPost!]
    comments: [Comment!]
  }

  type Token {
    token: String!
  }
`;
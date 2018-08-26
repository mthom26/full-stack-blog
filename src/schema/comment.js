import { gql } from 'apollo-server-express';

export default gql `
  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]
  }

  type Comment {
    id: ID!
    user: User!
    blogPost: BlogPost!
    content: String!
  }
`;
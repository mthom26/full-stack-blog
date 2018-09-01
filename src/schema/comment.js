import { gql } from 'apollo-server-express';

export default gql `
  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]
  }

  extend type Mutation {
    createComment(
      blogPostId: String!
      content: String!
    ): Comment!

    deleteComment(id: String!): Boolean!
  }

  type Comment {
    id: ID!
    user: User!
    blogPost: BlogPost!
    content: String!
  }
`;
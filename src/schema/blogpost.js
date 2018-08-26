import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    blogPost(id: ID!): BlogPost
    blogPosts: [BlogPost!]
  }

  type BlogPost {
    id: ID!
    title: String!
    user: User!
    content: String!
    comments: [Comment!]
  }
`;
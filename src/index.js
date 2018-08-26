import 'dotenv/config';

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import seedData from './seedData';

const app = express();

const schema = gql`
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]

    blogPost(id: ID!): BlogPost
    blogPosts: [BlogPost!]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    blogPosts: [BlogPost!]
    comments: [Comment!]
  }

  type BlogPost {
    id: ID!
    title: String!
    user: User!
    content: String!
    comments: [Comment!]
  }

  type Comment {
    id: ID!
    user: User!
    blogPost: BlogPost!
    content: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return seedData.users[1];
    },
    user: (parent, { id }) => {
      return seedData.users[id];
    },
    users: () => {
      return Object.values(seedData.users);
    },

    blogPost: (parent, { id }) => {
      return seedData.blogPosts[id];
    },
    blogPosts: () => {
      return Object.values(seedData.blogPosts);
    }
  },

  User: {
    blogPosts: (parent) => {
      return (
        Object.values(seedData.blogPosts).filter(post => {
          return post.userId === parent.id;
        })
      );
    },
    comments: (parent) => {
      return (
        Object.values(seedData.comments).filter(comment => {
          return comment.userId === parent.id;
        })
      );
    }
  },

  BlogPost: {
    comments: (parent) => {
      return (
        Object.values(seedData.comments).filter(comment => {
          return comment.blogPostId === parent.id;
        })
      );
    },
    user: (parent) => {
      return seedData.users[parent.userId];
    }
  },

  Comment: {
    user: (parent) => {
      return seedData.users[parent.userId];
    },
    blogPost: (parent) => {
      return seedData.blogPosts[parent.blogPostId];
    }
  }
};

/*
  Include playground setting as workaround to bug:
  https://github.com/prisma/graphql-playground/issues/790
*/
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: {
    settings: {
      'editor.cursorShape': 'line'
    }
  }
});

server.applyMiddleware({ app, path: '/graphql'});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
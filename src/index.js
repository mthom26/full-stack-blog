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
  }

  type User {
    id: ID!
    username: String!
    email: String!
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
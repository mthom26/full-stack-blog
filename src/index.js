import 'dotenv/config';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { sequelize } from './models';
import resolvers from './resolvers';
import schema from './schema';

const app = express();

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
  },
  context: {
    models,
    me: null
  }
});

server.applyMiddleware({ app, path: '/graphql'});

const PORT = process.env.PORT || 8000;

sequelize.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
});

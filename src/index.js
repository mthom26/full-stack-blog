import 'dotenv/config';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import db, { userFuncs } from './models';
import resolvers from './resolvers';
import schema from './schema';
import seedDatabase from './seedData';
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
    db,
    userFuncs,
    me: null
  }
});

server.applyMiddleware({ app, path: '/graphql'});

const PORT = process.env.PORT || 8000;
const eraseDBOnSync = process.env.TEST_DATABASE ? true : false;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
/*
sequelize.sync({ force: eraseDBOnSync }).then(async () => {
  if(eraseDBOnSync) {
    seedDatabase(models);
  }

  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
})
*/

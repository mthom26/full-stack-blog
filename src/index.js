import 'dotenv/config';

import express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import db, { userFuncs, blogPostFuncs, commentFuncs } from './models';
import resolvers from './resolvers';
import schema from './schema';
import { seedDatabase } from './seedData';
import { verifyToken } from './utils';

const app = express();

const getAuthUser = async (req) => {
  const token = req.headers['x-token'];
  
  if(token) {
    try {
      return await verifyToken(token);
    } catch (err) {
      throw new AuthenticationError('Your session expired. Please sign in.');
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
  },
  context: async ({ req }) => {
    const authUser = await getAuthUser(req);
    //console.log(authUser);
    return {
      db,
      userFuncs,
      blogPostFuncs,
      commentFuncs,
      authUser
    };
  }
});

server.applyMiddleware({ app, path: '/graphql'});

const PORT = process.env.PORT || 8000;
const eraseDBOnSync = process.env.TEST_DATABASE ? true : false;

if(eraseDBOnSync) {
  seedDatabase(db);
}

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
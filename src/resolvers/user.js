import { UserInputError, AuthenticationError } from "apollo-server";

import { createToken, createHash, verifyHash } from '../utils';

export default {
  Query: {
    me: async (parent, args, { db, userFuncs, me }) => {
      return await userFuncs.getUser(db, '1');
    },
    user: async (parent, { id }, { db, userFuncs }) => {
      return await userFuncs.getUser(db, id);
    },
    users: async (parent, args, { db, userFuncs }) => {
      return await userFuncs.getAllUsers(db);
    }
  },

  Mutation: {
    signUp: async (parent, { username, email, password }, { db, userFuncs }) => {
      const hash = await createHash(password);
      const id = await userFuncs.createUser(db, { 
        username,
        email,
        password: hash
      });
      
      if(!id) {
        throw new AuthenticationError('Could not create User.')
      }
      const tokenData = { id: id[0], username, email };
      return { token: createToken(tokenData) };
    },
    signIn: async (parent, { email, password }, { db, userFuncs }) => {
      const user = await userFuncs.getUserByEmail(db, email);
      if(!user) {
        throw new UserInputError('User not found.');
      } 

      const isValid = await verifyHash(password, user.password);
      if(!isValid) {
        throw new AuthenticationError('Invalid Password.');
      } 
      
      const tokenData = {
        username: user.username,
        email: user.email,
        id: user.id
      };
      return { token: createToken(tokenData) };
    }
  },

  User: {
    blogPosts: async (parent, args, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getChildBlogPosts(db, parent.id, 'userId');
    },
    comments: async (parent, args, { db, commentFuncs }) => {
      return await commentFuncs.getChildComments(db, parent.id, 'userId');
    }
  }
};
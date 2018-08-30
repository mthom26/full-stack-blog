import { UserInputError, AuthenticationError } from "apollo-server";

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
      const user = await userFuncs.createUser(db, { username, email, password });
      if(!user) {
        // Throw some error
      }
      return { token: 'Token' };
    },
    signIn: async (parent, { email, password }, { db, userFuncs }) => {
      const user = await userFuncs.getUserByEmail(db, email);
      if(!user) {
        throw new UserInputError('User not found.');
      } 
      if(user.password !== password) {
        throw new AuthenticationError('Invalid Password.');
      } 
      return { token: 'Token' };
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
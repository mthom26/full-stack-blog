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
    signUp: async (parent, { username, email, password }, { models }) => {
      const user = await models.User.create({
        username,
        email,
        password
      });

      return { token: 'Token' };
    },
    signIn: async (parent, { email, password }, { models }) => {
      const user = await models.User.findOne({
        where: { email: email }
      });
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
    blogPosts: async (parent, args, { models }) => {
      return (
        await models.BlogPost.findAll({
          where: {
            userId: parent.id
          }
        })
      );
    },
    comments: async (parent, args, { models }) => {
      return (
        await models.Comment.findAll({
          where: {
            userId: parent.id
          }
        })
      );
    }
  }
};
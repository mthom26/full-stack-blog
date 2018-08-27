export default {
  Query: {
    me: async (parent, args, { models, me }) => {
      return await models.User.findById(me.id);
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findById(id);
    },
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
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
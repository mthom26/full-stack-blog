export default {
  Query: {
    comment: async (parent, { id }, { models }) => {
      return await models.Comment.findById(id);
    },
    comments: async (parent, args, { models }) => {
      return await models.Comment.findAll();
    }
  },

  Comment: {
    user: async (parent, args, { models }) => {
      return await models.User.findById(parent.userId);
    },
    blogPost: async (parent, args, { models }) => {
      return await models.BlogPost.findById(parent.blogPostId);
    }
  }
};
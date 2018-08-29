export default {
  Query: {
    comment: async (parent, { id }, { db, commentFuncs }) => {
      return await commentFuncs.getComment(db, id);
    },
    comments: async (parent, args, { db, commentFuncs }) => {
      return await commentFuncs.getAllComments(db);
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
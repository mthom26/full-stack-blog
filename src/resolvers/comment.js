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
    user: async (parent, args, { db, userFuncs }) => {
      return await userFuncs.getUser(db, parent.userId);
    },
    blogPost: async (parent, args, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getBlogPost(db, parent.blogPostId);
    }
  }
};
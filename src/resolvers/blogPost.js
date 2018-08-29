export default {
  Query: {
    blogPost: async (parent, { id }, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getBlogPost(db, id);
    },
    blogPosts: async (parent, args, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getAllBlogPosts(db);
    }
  },

  BlogPost: {
    comments: async (parent, args, { db, commentFuncs }) => {
      return await commentFuncs.getChildComments(db, parent.id, 'blogPostId');
    },
    user: async (parent, args, { db, userFuncs }) => {
      return userFuncs.getUser(db, parent.userId);
    }
  }
};
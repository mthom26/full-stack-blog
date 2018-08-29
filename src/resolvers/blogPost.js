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
    comments: async (parent, args, { models }) => {
      return (
        await models.Comment.findAll({
          where: {
            blogPostId: parent.id
          }
        })
      );
    },
    user: async (parent, args, { models }) => {
      return await models.User.findById(parent.userId);
    }
  }
};
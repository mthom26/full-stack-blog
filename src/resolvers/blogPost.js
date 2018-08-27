export default {
  Query: {
    blogPost: async (parent, { id }, { models }) => {
      return await models.BlogPost.findById(id);
    },
    blogPosts: async (parent, args, { models }) => {
      return await models.BlogPost.findAll();
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
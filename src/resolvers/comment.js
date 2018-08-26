export default {
  Query: {
    comment: (parent, { id }, { models }) => {
      return models.comments[id];
    },
    comments: (parent, args, { models }) => {
      return Object.values(models.comments);
    }
  },

  Comment: {
    user: (parent, args, { models }) => {
      return models.users[parent.userId];
    },
    blogPost: (parent, args, { models }) => {
      return models.blogPosts[parent.blogPostId];
    }
  }
};
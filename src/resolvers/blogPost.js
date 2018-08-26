export default {
  Query: {
    blogPost: (parent, { id }, { models }) => {
      return models.blogPosts[id];
    },
    blogPosts: (parent, args, { models }) => {
      return Object.values(models.blogPosts);
    }
  },

  BlogPost: {
    comments: (parent, args, { models }) => {
      return (
        Object.values(models.comments).filter(comment => {
          return comment.blogPostId === parent.id;
        })
      );
    },
    user: (parent, args, { models }) => {
      return models.users[parent.userId];
    }
  }
};
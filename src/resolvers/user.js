export default {
  Query: {
    me: (parent, args, { models }) => {
      return models.users[1];
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    }
  },

  User: {
    blogPosts: (parent, args, { models }) => {
      return (
        Object.values(models.blogPosts).filter(post => {
          return post.userId === parent.id;
        })
      );
    },
    comments: (parent, args, { models }) => {
      return (
        Object.values(models.comments).filter(comment => {
          return comment.userId === parent.id;
        })
      );
    }
  }
};
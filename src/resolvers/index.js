const resolvers = {
  Query: {
    me: (parent, args, { models }) => {
      return models.users[1];
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },

    blogPost: (parent, { id }, { models }) => {
      return models.blogPosts[id];
    },
    blogPosts: (parent, args, { models }) => {
      return Object.values(models.blogPosts);
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

export default resolvers;
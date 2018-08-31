import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated } from './authorization';

export default {
  Query: {
    blogPost: async (parent, { id }, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getBlogPost(db, id);
    },
    blogPosts: async (parent, args, { db, blogPostFuncs }) => {
      return await blogPostFuncs.getAllBlogPosts(db);
    }
  },

  Mutation: {
    createBlogPost: combineResolvers(
      isAuthenticated,
      async (parent, { title, content }, { db, blogPostFuncs, authUser }) => {
        const blogPostData = {
          title,
          content,
          userId: authUser.id
        };
        const blogPostId = await blogPostFuncs.createBlogPost(db, blogPostData);

        return { id: blogPostId, ...blogPostData };
      }
    )
    
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
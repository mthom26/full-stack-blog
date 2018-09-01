import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated, isCommentOwner } from './authorization';

export default {
  Query: {
    comment: async (parent, { id }, { db, commentFuncs }) => {
      return await commentFuncs.getComment(db, id);
    },
    comments: async (parent, args, { db, commentFuncs }) => {
      return await commentFuncs.getAllComments(db);
    }
  },

  Mutation: {
    createComment: combineResolvers(
      isAuthenticated,
      async (parent, { content, blogPostId }, { db, commentFuncs, authUser }) => {
        const commentData = {
          content,
          blogPostId,
          userId: authUser.id
        }
        const commentId = await commentFuncs.createComment(db, commentData);

        return { id: commentId, ...commentData };
      }
    ),

    deleteComment: combineResolvers(
      isCommentOwner,
      async (parent, { id }, { db, commentFuncs }) => {
        await commentFuncs.deleteComment(db, id);
        return true;
      }
    )
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
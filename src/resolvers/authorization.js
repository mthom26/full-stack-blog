import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

const isAuthenticated = (parent, args, { authUser }) => {
  // console.log(authUser);
  return authUser ? skip : new ForbiddenError('Not authenticated as user.');
};

const isBlogPostOwner = async (parent, { id }, { db, authUser, blogPostFuncs }) => {
  const blogPost = await blogPostFuncs.getBlogPost(db, id);

  if(blogPost.userId != authUser.id) {
    throw new ForbiddenError('Not authorized.')
  }
  return skip;
}

export { isAuthenticated, isBlogPostOwner };
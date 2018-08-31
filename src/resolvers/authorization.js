import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

const isAuthenticated = (parent, args, { authUser }) => {
  // console.log(authUser);
  return authUser ? skip : new ForbiddenError('Not authenticated as user.');
};

export { isAuthenticated };
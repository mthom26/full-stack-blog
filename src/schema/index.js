import { gql } from 'apollo-server-express';

import userSchema from './user';
import blogPostSchema from './blogpost';
import commentSchema from './comment';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, blogPostSchema, commentSchema];
import { getCommentById, getBlogPostById, getUserById } from './api';
import { seedData } from '../seedData';

describe('top level queries', () => {
  describe('user(id: String!): User', () => {
    it('returns correct user', async () => {
      const expectedResult = {
        user: {
          username: seedData.users[0].username,
          email: seedData.users[0].email,
          id: '1'
        }
      };
      
      const result = await getUserById({id: "1"});
      expect(result.data.data).toEqual(expectedResult);
    })
  });

  describe('blogPost(id: String!): BlogPost', () => {
    it('returns correct blogpost', async () => {
      const expectedResult = {
        blogPost: {
          title: seedData.blogPosts[0].title,
          content: seedData.blogPosts[0].content,
          id: '1'
        }
      };
      
      const result = await getBlogPostById({id: "1"});
      expect(result.data.data).toEqual(expectedResult);
    })
  });

  describe('comment(id: String!): Comment', () => {
    it('returns correct comment', async () => {
      const expectedResult = {
        comment: {
          content: seedData.comments[0].content,
          id: '1'
        }
      };
      
      const result = await getCommentById({id: "1"});
      expect(result.data.data).toEqual(expectedResult);
    })
  });
});
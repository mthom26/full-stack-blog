import { getUserById, getCommentById, getBlogPostById } from './api';
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
          userId: seedData.blogPosts[0].userId,
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
          userId: seedData.comments[0].userId,
          blogPostId: seedData.comments[0].blogPostId,
          id: '1'
        }
      };
      
      const result = await getCommentById({id: "1"});
      expect(result.data.data).toEqual(expectedResult);
    })
  });
});
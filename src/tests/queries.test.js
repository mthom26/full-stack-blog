import { apiPost } from './api';
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

      const query = `
        query($id: ID!) {
          user(id: $id) {
            id
            username
            email
          }
        }
      `;
      
      const result = await apiPost(query, {id: "1"});
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
      
      const query = `
        query($id: ID!) {
          blogPost(id: $id) {
            id
            title
            content
          }
        }
      `;
      const result = await apiPost(query, {id: "1"});
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
      
      const query = `
        query($id: ID!) {
          comment(id: $id) {
            id
            content
          }
        }
      `;
      const result = await apiPost(query, {id: "1"});
      expect(result.data.data).toEqual(expectedResult);
    })
  });
});
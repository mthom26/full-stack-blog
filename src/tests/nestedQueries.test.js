import { apiPost } from './api';
import { seedData } from '../seedData';

describe('nested queries', () => {

  describe('user with child blogPosts', () => {
    it('returns correct user and blogpost(s)', async () => {
      const expectedResult = {
        user: {
          username: seedData.users[0].username,
          email: seedData.users[0].email,
          id: '1',
          blogPosts: [
            {
              title: 'Top Noob\'s Blog Post',
              content: 'Pressing Buttonz!!' 
            },
            {
              title: 'Another Blog Post',
              content: 'Pressing moar Buttonz!!'
            }
          ]
        }
      };

      const query = `
        query($id: ID!) {
          user(id: $id) {
            id
            username
            email
            blogPosts {
              title
              content
            }
          }
        }
      `;

      const result = await apiPost(query, {id:"1"});
      expect(result.data.data).toEqual(expectedResult);
    });
  });

});
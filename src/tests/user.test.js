import * as userApi from './api';

describe('top level queries', () => {
  describe('user(id: String!): User', () => {
    it('returns correct user', async () => {
      const expectedResult = {
        data: {
          user: {
            id: '1',
            username: 'Top Noob',
            email: 'topnoob@email.com'
          }
        }
      };
      
      const result = await userApi.getUserbyId({id: "1"});
      expect(result.data).toEqual(expectedResult);
    })
  })
});
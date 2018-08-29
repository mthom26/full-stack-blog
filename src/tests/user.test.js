import * as userApi from './api';

describe('users', () => {
  describe('test fetch', () => {
    it('returns data', async () => {
      const result = await userApi.test();
      expect(result.data).toHaveProperty('title');
    })
  });

  // describe('user(id: String!): User', () => {
  //   it('returns correct user for id', () => {
  //     const expectedResult = {
  //       data: {
  //         user: {
  //           id: '1',
  //           username: 'Top Noob',
  //           email: 'topnoob@email.com'
  //         }
  //       }
  //     };
     
  //     return userApi.user({ id: "1" }).then(result => {
  //       expect(result).toEqual(expectedResult);
  //     })
  //   })
  // })
});
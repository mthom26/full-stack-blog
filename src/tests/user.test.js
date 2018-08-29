import * as userApi from './api';

describe('users', () => {
  // describe('test fetch', () => {
  //   it('returns data', async () => {
  //     const result = await userApi.test();
  //     expect(result.data).toHaveProperty('title');
  //   })
  // });

  describe('user(id: String!): User', () => {
    it('returns correct user for id', async () => {
      //console.log('running this test')
      const expectedResult = {
        data: {
          user: {
            id: '1',
            username: 'Top Noob',
            email: 'topnoob@email.com'
          }
        }
      };
      
      const result = await userApi.user({id: "1"});
      //console.log(result.data)
      expect(result.data).toEqual(expectedResult);
    })

    it('returns correct from variable', async () => {
      console.log('running this test')
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
      console.log(result.data)
      expect(result.data).toEqual(expectedResult);
    })
  })
});
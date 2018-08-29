import user from './user';

test('user resolver', () => {
  expect(user).toHaveProperty('Query');
  expect(user).toHaveProperty('Mutation');
  expect(user).toHaveProperty('User');
});
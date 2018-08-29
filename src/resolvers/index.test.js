import resolvers from './index';

test('resolvers', () => {
  expect(resolvers).toHaveLength(3);
});
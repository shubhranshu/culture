import { Books } from '../src/index';

test('Tests that there are some books and can be loaded', () => {
  expect(Books.length).toBe(3);
});

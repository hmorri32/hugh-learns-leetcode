import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf', () => {
  it('should return the product of all elements in the array except self', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
    expect(productExceptSelf([0, 0])).toStrictEqual([0, 0]);
  });
});

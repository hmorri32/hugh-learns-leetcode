import { twoSum, bruteForceTwoSum, hashTwoSum } from './twoSum.js';

describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

describe('bruteForceTwoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    expect(bruteForceTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(bruteForceTwoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

describe('hashTwoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    expect(hashTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(hashTwoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

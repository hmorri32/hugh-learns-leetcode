import containsDuplicate, {
  sortedSearch,
  bruteForceSearch,
} from './containsDuplicate';

describe('containsDuplicate', () => {
  it('should return true if array contains duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});

describe('sortedSearch', () => {
  it('should return true if array contains duplicate', () => {
    expect(sortedSearch([1, 2, 3, 1])).toBe(true);
    expect(sortedSearch([1, 2, 3, 4])).toBe(false);
    expect(sortedSearch([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});

describe('bruteForceSearch', () => {
  it('should return true if array contains duplicate', () => {
    expect(bruteForceSearch([1, 2, 3, 1])).toBe(true);
    expect(bruteForceSearch([1, 2, 3, 4])).toBe(false);
    expect(bruteForceSearch([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});

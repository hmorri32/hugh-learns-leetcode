import { describe } from '@jest/globals';
import { longestCommonPrefix } from './longestPrefix';

describe('longestCommonPrefix', () => {
  it('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});

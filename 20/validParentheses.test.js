import { validParentheses } from './validParentheses';

describe('validParentheses', () => {
  it('should return true if string is valid parentheses', () => {
    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('()[]{}')).toBe(true);
    expect(validParentheses('(]')).toBe(false);
    expect(validParentheses('([)]')).toBe(false);
    expect(validParentheses('{[]}')).toBe(true);
  });
});

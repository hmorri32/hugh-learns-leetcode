import { isPalindromeNum, isPalindrome } from './palindromeNumber';

describe('isPalindromeNum', () => {
  it('should return true if the number is a palindrome', () => {
    expect(isPalindromeNum(121)).toBe(true);
    expect(isPalindromeNum(12321)).toBe(true);
    expect(isPalindromeNum(123321)).toBe(true);
  });

  it('should return false if the number is not a palindrome', () => {
    expect(isPalindromeNum(123)).toBe(false);
    expect(isPalindromeNum(123456)).toBe(false);
  });
})

describe('isPalindrome', () => {
  it('should return true if the number is a palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(123321)).toBe(true);
  });

  it('should return false if the number is not a palindrome', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(123456)).toBe(false);
  });
})
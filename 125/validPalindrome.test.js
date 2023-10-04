import { validPalindrome, validPalindromeTwoPointers } from './validPalindrome';

const inputs = {
  input1: 'A man, a plan, a canal: Panama',
  input2: 'race a car',
  input3: ' ',
};

const { input1, input2, input3 } = inputs;

describe('validPalindrome', () => {
  it('should return true if string is a palindrome', () => {
    expect(validPalindrome(input1)).toBe(true);
    expect(validPalindrome(input2)).toBe(false);
    expect(validPalindrome(input3)).toBe(true);
  });
});

describe('validPalindromeTwoPointers', () => {
  it('should return true if string is a palindrome', () => {
    expect(validPalindrome(input1)).toBe(true);
    expect(validPalindrome(input2)).toBe(false);
    expect(validPalindrome(input3)).toBe(true);
  });
});

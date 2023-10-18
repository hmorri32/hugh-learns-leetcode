// Given an integer x, return true if x is a  palindrome and false otherwise.

/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */

// converting to string
export const isPalindrome = (x) => {
  const str = x.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

// reversing numbers
export const isPalindromeNum = (x) => {
  if (x < 0) return false;

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed === original;
};

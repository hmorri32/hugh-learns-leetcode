/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */

const removeRandoCharacters = (s) => {
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
};

export const validPalindrome = (s) => {
  const str = removeRandoCharacters(s);
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

export const validPalindromeTwoPointers = (s) => {
  let str = removeRandoCharacters(s);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

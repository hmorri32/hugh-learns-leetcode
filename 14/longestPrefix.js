// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */

export const longestCommonPrefix = function (strs) {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (i === s.length || s[i] !== strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;

  // let first = strs[0];
  // for (let word of strs) {
  //   for (let i = first.length - 1; i >= 0; i--) {
  //     if (word[i] !== first[i]) {
  //       first = first.slice(0, i);
  //     }
  //   }
  // }
  // return first
};

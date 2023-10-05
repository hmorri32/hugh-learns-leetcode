/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */

const mapOfPossibilities = {
  '(': ')',
  '[': ']',
  '{': '}',
};

export const validParentheses = (s) => {
  let stack = [];
  for (const char of s) {
    if (char in mapOfPossibilities) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (char !== mapOfPossibilities[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};


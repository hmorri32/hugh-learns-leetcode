/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export const validAnagram = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

export const validAnagramMap = (s, t) => {
  if (s.length !== t.length) return false;

  const sCount = new Map();
  const tCount = new Map();

  for (let i = 0; i < s.length; i++) {
    sCount.set(s[i], (sCount.get(s[i]) || 0) + 1);
    tCount.set(t[i], (tCount.get(t[i]) || 0) + 1);
  }

  for (const [key, value] of sCount) {
    if (sCount.get(key) !== tCount.get(key)) {
      return false;
    }
  }

  return true;
};

export const validAnagramFreqMap = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  // add s characters to map
  for (const char of s) {
    const count = (map.get(char) || 0) + 1;

    map.set(char, count);
  }

  // subtract t characters from map
  for (const char of t) {
    if (!map.has(char)) continue;

    const count = map.get(char) - 1;

    map.set(char, count);
  }

  // ensure each key val pair is empty thus an anagram
  for (const val of map.values()) {
    if (val !== 0) return false;
  }

  return true;
};

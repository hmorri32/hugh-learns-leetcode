/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */

export const groupAnagr2ams = (strs) => {
  const output = {};

  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    if (!output[sorted]) output[sorted] = [];
    if (output[sorted]) {
      output[sorted].push(str);
    }
  }

  return Object.values(output);
};

export const groupAnagrams = (strs) => {
  let map = new Map();

  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return [...map.values()];
};

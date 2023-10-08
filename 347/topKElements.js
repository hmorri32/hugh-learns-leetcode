/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = function (nums, k) {
  let frequencyMap = new Map();

  for (let num of nums) {
    frequencyMap.set(num, frequencyMap.get(num) + 1 || 1);
  }

  let sortedByFreq = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

  return sortedByFreq.map((el) => el[0]).slice(0, k);
};

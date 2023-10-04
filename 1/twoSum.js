/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// sort + two pointers
export const twoSum = (nums, target) => {
  const sorted = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === target) {
      return [nums.indexOf(sorted[left]), nums.lastIndexOf(sorted[right])];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

export const bruteForceTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    for (let next = i + 1; next < nums.length; next++) {
      if (nums[next] === complement) {
        return [i, next];
      }
    }
  }
};

export const hashTwoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const sumIndex = map.get(complement);

    if (map.has(complement) && sumIndex !== i) {
      return [i, sumIndex];
    }
  }
  return [-1, -1];
};

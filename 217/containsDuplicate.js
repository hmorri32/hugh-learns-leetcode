// https://leetcode.com/problems/contains-duplicate/

// Hash Set
// Time O(N) | Space O(N)
export default containsDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;

    set.add(num);
  }
  return false;
};

const setTake2 = (nums) => {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};

// brute force, linear search
// Time O(N^2) | Space O(1)
export const bruteForceSearch = (nums) => {
  for (let right = 0; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      if (nums[left] === nums[right]) return true;
    }
  }
  return false;
};

// Time O(N * log(N)) | Space O(1)
export const sortedSearch = (nums) => {
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) return true;
    return false;
  }
};

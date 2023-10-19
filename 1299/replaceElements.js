/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */

// brute force
export const replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let biggest = 0;

    for (let j = i + 1; j < arr.length; j++) {
      biggest = Math.max(biggest, arr[j]);
    }

    arr[i] = biggest;
  }

  arr[arr.length - 1] = -1; // last element is always -1

  return arr;
};

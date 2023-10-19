/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = function (nums) {
  return [...nums, ...nums];
};

export const getConcatenation2 = function (nums) {
  let result = [];

  for (let i = 0; i < 2; i++) {
    for (let num of nums) {
      result.push(num);
    }
  }

  return result;
};

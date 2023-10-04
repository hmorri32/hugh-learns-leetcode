export default containsDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;

    set.add(num);
  }
  return false;
};

function take2(nums) {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
}

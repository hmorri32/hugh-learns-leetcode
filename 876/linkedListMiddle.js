/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */

export const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// In the naive approach, we use an external array to store the elements of the linked list, and then we return the element present at the index arr.length / 2
export const middleNodeNaive = (head) => {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current);
    current = current.next;
  }

  return arr[Math.floor(arr.length / 2)];
};

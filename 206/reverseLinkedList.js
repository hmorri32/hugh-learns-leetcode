/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iteratively
export const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

export const recursivelyReverse = (head) => {
  if (!head || !head.next) return head;

  let reversed = recursivelyReverse(head.next);
  head.next.next = head;
  head.next = null;

  return reversed;
};

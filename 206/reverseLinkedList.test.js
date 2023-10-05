import { reverseLinkedList, recursivelyReverse } from './reverseLinkedList';

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

describe('reverseLinkedList', () => {
  it('should return the reversed linked list', () => {
    expect(
      reverseLinkedList(
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
        ),
      ),
    ).toEqual(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))),
      ),
    );
  });
});

describe('recursivelyReverse', () => {
  it('should return the reversed linked list', () => {
    expect(
      recursivelyReverse(
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
        ),
      ),
    ).toEqual(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))),
      ),
    );
  });
});

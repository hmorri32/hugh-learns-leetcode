import { mergeTwoLists } from './mergeLinkedLists';

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

describe('mergeTwoLists', () => {
  it('should merge two linked lists', () => {
    expect(mergeTwoLists(list1, list2)).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
        ),
      ),
    );
  });
});

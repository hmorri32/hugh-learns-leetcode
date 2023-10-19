import { middleNode } from './linkedListMiddle';

describe('middleNode', () => {
  it('should return the middle node', () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    expect(middleNode(head)).toEqual(head.next);
  });

  it('should return the middle node', () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null,
          },
        },
      },
    };

    expect(middleNode(head)).toEqual(head.next.next);
  });
});

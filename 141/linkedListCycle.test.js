import { hasCycle } from './linkedListCycle';

describe('hasCycle', () => {
  it('should return true', () => {
    const head = {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 0,
          next: {
            val: -4,
            next: null,
          },
        },
      },
    };
    head.next.next.next.next = head.next;

    expect(hasCycle(head)).toBe(true);
  });

  it('should return false', () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    };

    expect(hasCycle(head)).toBe(false);
  });

  it('should return false', () => {
    const head = {
      val: 1,
      next: null,
    };

    expect(hasCycle(head)).toBe(false);
  });
});

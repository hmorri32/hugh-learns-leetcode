import { topKFrequent } from './topKElements';

describe('topKFrequent', () => {
  it('should return the top k frequent elements', () => {
    const input = [6, 1, 1, 1, 2, 2, 3];
    const output = [1, 2];

    expect(topKFrequent(input, 2)).toEqual(output);

    const input2 = [6, 1, 3, 3, 3, 4, 5];
    const output2 = [3];

    expect(topKFrequent(input2, 1)).toEqual(output2);

    const input3 = [3];
    const output3 = [3];

    expect(topKFrequent(input3, 1)).toEqual(output3);
  });
});

import { groupAnagrams } from './groupAnagrams';

describe('groupAnagrams', () => {
  it('should group anagrams', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    expect(groupAnagrams(input)).toEqual(output);

    const input2 = [''];
    const output2 = [['']];
    expect(groupAnagrams(input2)).toEqual(output2);

    const input3 = ['a'];
    const output3 = [['a']];
    expect(groupAnagrams(input3)).toEqual(output3);
  });
});

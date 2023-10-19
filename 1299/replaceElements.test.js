import { replaceElements } from './replaceElements';

describe('replaceElements', () => {
  it('should return [18,6,6,6,1,-1]', () => {
    const arr = [17, 18, 5, 4, 6, 1];
    const expected = [18, 6, 6, 6, 1, -1];
    const actual = replaceElements(arr);

    expect(actual).toEqual(expected);
  });

  it('should return [400]', () => {
    const arr = [400];
    const expected = [-1];
    const actual = replaceElements(arr);

    expect(actual).toEqual(expected);
  });
});



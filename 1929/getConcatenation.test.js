import { getConcatenation, getConcatenation2 } from './getConcatenation';

describe('getConcatenation', () => {
  it('should return [1,2,1,1,2,1]', () => {
    const nums = [1, 2, 1];
    const expected = [1, 2, 1, 1, 2, 1];
    const actual = getConcatenation(nums);
    expect(actual).toEqual(expected);
  });

  it('should return [1,3,2,1,1,3,2,1]', () => {
    const nums = [1, 3, 2, 1];
    const expected = [1, 3, 2, 1, 1, 3, 2, 1];
    const actual = getConcatenation(nums);
    expect(actual).toEqual(expected);
  });
});

describe('getConcatenation2', () => {
  it('should return [1,2,1,1,2,1]', () => {
    const nums = [1, 2, 1];
    const expected = [1, 2, 1, 1, 2, 1];
    const actual = getConcatenation2(nums);
    expect(actual).toEqual(expected);
  });

  it('should return [1,3,2,1,1,3,2,1]', () => {
    const nums = [1, 3, 2, 1];
    const expected = [1, 3, 2, 1, 1, 3, 2, 1];
    const actual = getConcatenation2(nums);
    expect(actual).toEqual(expected);
  });
});

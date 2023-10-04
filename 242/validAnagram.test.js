import {
  validAnagram,
  validAnagramMap,
  validAnagramFreqMap,
} from './validAnagram';

describe('validAnagram', () => {
  it('should return true if string is an anagram', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('rat', 'car')).toBe(false);
  });
});

describe('validAnagramMap', () => {
  it('should return true if string is an anagram', () => {
    expect(validAnagramMap('anagram', 'nagaram')).toBe(true);
    expect(validAnagramMap('rat', 'car')).toBe(false);
  });
});

describe('validAnagramFreqMap', () => {
  it('should return true if string is an anagram', () => {
    expect(validAnagramFreqMap('anagram', 'nagaram')).toBe(true);
    expect(validAnagramFreqMap('rat', 'car')).toBe(false);
  });
});

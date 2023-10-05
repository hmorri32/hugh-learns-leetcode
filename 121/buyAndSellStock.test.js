import {
  buyAndSellStockBruteForce,
  buyAndSellStockTwoPointers,
} from './buyAndSellStock';

describe('buyAndSellStockBruteForce', () => {
  it('should return the maximum profit from buying and selling stock', () => {
    expect(buyAndSellStockBruteForce([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(buyAndSellStockBruteForce([7, 6, 4, 3, 1])).toBe(0);
  });
});
describe('buyAndSellStockTwoPointers', () => {
  it('should return the maximum profit from buying and selling stock', () => {
    expect(buyAndSellStockTwoPointers([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(buyAndSellStockTwoPointers([7, 6, 4, 3, 1])).toBe(0);
  });
});

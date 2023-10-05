/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

export const buyAndSellStockBruteForce = (prices) => {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const localProfit = prices[j] - prices[i];
      if (localProfit > profit) {
        profit = localProfit;
      }
    }
  }

  return profit;
};

// sliding window
export const buyAndSellStockTwoPointers = (prices) => {
  let left = 0; // left = buy, right = sell
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
};

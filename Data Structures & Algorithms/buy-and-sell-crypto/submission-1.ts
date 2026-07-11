class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let i = 0;
        let j = i + 1;
        while (j < prices.length) {
            let profit = prices[j]! - prices[i]!;
            if (profit < 0) i++;
            else j++;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}

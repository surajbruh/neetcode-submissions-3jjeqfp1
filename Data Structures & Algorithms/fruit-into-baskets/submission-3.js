class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let l = 0;
        let maxLen = 0;
        const freq = new Map();
        for (let r = 0; r < fruits.length; r++) {
            freq.set(fruits[r], (freq.get(fruits[r]) || 0) + 1);
            if (freq.size > 2) {
                freq.set(fruits[l], freq.get(fruits[l]) - 1);
                if (freq.get(fruits[l]) === 0) freq.delete(fruits[l]);
                l++;
            }
            if (freq.size <= 2) maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}

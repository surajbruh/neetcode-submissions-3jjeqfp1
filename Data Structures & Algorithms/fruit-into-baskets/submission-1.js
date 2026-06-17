class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let maxLen = 0;
        for (let i = 0; i < fruits.length; i++) {
            let seen = new Set();
            for (let j = i; j < fruits.length; j++) {
                if (!seen.has(fruits[j])) seen.add(fruits[j]);
                if (seen.size > 2) break;
                else maxLen = Math.max(maxLen, j - i + 1);
            }
        }
        return maxLen;
    }
}

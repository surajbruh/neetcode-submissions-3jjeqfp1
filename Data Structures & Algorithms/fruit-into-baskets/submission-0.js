class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let maxLen = 0;
        for (let i = 0; i < fruits.length; i++) {
            let distinct = 2;
            let freq = new Map();
            for (let j = i; j < fruits.length; j++) {
                if (freq.has(fruits[j])) {
                    freq.set(fruits[j], freq.get(fruits[j]) + 1);
                    continue;
                }
                if (distinct && !freq.has(fruits[j])) {
                    freq.set(fruits[j], 1);
                    distinct--;
                } else if (!distinct && !freq.has(fruits[j])) break;
            }
            let count = 0;
            for (const [key, value] of freq) {
                count += value;
            }
            maxLen = Math.max(maxLen, count);
        }
        return maxLen;
    }
}

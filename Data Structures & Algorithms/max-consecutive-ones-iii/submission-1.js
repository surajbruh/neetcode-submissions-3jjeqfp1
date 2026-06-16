class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let maxLen = 0;
        const freq = new Map();

        for (let r = 0; r < nums.length; r++) {
            freq.set(nums[r], (freq.get(nums[r]) || 0) + 1);

            let freq1 = freq.get(1) || 0;
            let windowSize = r + 1 - l;
            while (windowSize - freq1 > k) {
                freq.set(nums[l], freq.get(nums[l]) - 1);
                freq1 = freq.get(1);
                l++;
                windowSize = r - l + 1;
            }
            maxLen = Math.max(maxLen, windowSize);
        }
        return maxLen;
    }
}

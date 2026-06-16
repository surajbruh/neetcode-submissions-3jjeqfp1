class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}https://neetcode.io/profile$0
     */
    longestOnes(nums, k) {
        let l = 0;
        let maxLen = 0;
        let zeroCount = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 0) zeroCount++;

            while (zeroCount > k) {
                if (nums[l] === 0) zeroCount--;
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}

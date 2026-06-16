class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}https://neetcode.io/profile$0
     */
    longestOnes(nums, k) {
        let l = 0;
        let count = 0;
        let maxLen = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 0) count++;

            if (count > k) {
                if (nums[l] === 0) count--;
                l++;
            } else {
                maxLen = Math.max(maxLen, r - l + 1);
            }
        }
        return maxLen;
    }
}

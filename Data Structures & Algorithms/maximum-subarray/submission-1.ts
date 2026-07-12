class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let max = nums[0]!;
        for (let i = 0; i < nums.length; i++) {
            let sum = 0;
            for (let j = i; j < nums.length; j++) {
                sum += nums[j]!;
                max = Math.max(sum, max);
            }
        }
        return max;
    }
}

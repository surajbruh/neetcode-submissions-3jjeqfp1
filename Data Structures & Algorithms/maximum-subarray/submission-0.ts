class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let max = nums[0]!;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                let sum = 0;
                for (let k = i; k <= j; k++) sum += nums[k]!;
                if (sum > max) max = sum;
            }
        }
        return max;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let freq = new Map();
        let maxFreq = 0;

        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
            if (freq.get(nums[i]) > freq.get(nums[maxFreq])) maxFreq = i;
        }
        return nums[maxFreq];
    }
}

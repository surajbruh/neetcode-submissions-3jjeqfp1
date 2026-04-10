class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) return;
        for (let index = 0; index < nums.length; index++) {
            const seen = new Set();
            for (let innerIndex = index + 1; innerIndex < nums.length; innerIndex++) {
                if (seen.has(nums[index])) continue;
                if (nums[index] + nums[innerIndex] === target) {
                    return [index, innerIndex];
                }
            }
            seen.add(nums[index]);
        }
        return;
    }
}

const nums = [3, 4, 5, 6];
const target = 7;

const x = new Solution();
console.log(x.twoSum(nums, target));

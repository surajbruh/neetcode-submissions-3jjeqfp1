class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let index = 0; index < nums.length; index++) {
            let counter = 0;
            const element = nums[index];
            for (let innerIndex = 0; innerIndex < nums.length; innerIndex++) {
                if (nums[innerIndex] === element) {
                    counter++;
                    if (counter > 1)
                        return true;
                }
            }
        }
        return false;
    }
}

const x = new Solution()
console.log(x.hasDuplicate([1, 2, 3, 3]))
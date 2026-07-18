class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums: number[]): number {
        if (nums.length - 1 === 1) return nums[0]!;

        let L = 1;
        let R = nums.length - 2;

        // last element
        if (nums[nums.length - 1] !== nums[R]) return nums[nums.length - 1]!;

        // first element
        if (nums[L] !== nums[0]) return nums[0]!;

        while (L < R) {
            let mid = Math.floor((L + R) / 2);

            // mid element
            if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid]!;

            // mid pointer is on left side & the single non duplicate element is on the right side
            if (
                (mid % 2 === 0 && nums[mid + 1] === nums[mid]) ||
                (mid % 2 === 1 && nums[mid - 1] === nums[mid])
            )
                L = mid + 1;
            // mid pointer is on right side & the single non duplicate element is on the left side
            else R = mid - 1;
        }

        return nums[L]!;
    }
}

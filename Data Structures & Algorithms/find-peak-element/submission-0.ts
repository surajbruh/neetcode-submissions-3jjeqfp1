class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums: number[]): number {
        // if array has only one element it's always going to be peak, because nums[-1] = nums[n] =- infinity < nums[]
        if (nums.length === 1) return 0;

        // first element is the peak
        if (nums[0]! > nums[1]!) return 0;
        // last element is the peak
        if (nums[nums.length - 1]! > nums[nums.length - 2]!) return nums.length - 1;

        let L = 1;
        let R = nums.length - 2;

        while (L <= R) {
            let mid = Math.floor((L + R) / 2);
            // mid pointer points to peak element
            console.log(
                L,
                mid,
                R,
                nums[mid]! > nums[mid + 1]! && nums[mid]! > nums[mid - 1]!,
                nums[mid]! > nums[mid - 1]!,
            );
            if (nums[mid]! > nums[mid + 1]! && nums[mid]! > nums[mid - 1]!) return mid;
            // mid pointer is at the increasing slope i.e at the left side of the peak element and that's why we move L pointer to the right
            if (nums[mid]! > nums[mid - 1]!) L = mid + 1;
            // mid pointer is at the decreasing slope i.e at the right side of the peak element and that's why we move R pointer to the left
            else R = mid - 1;
        }

        return -1;
    }
}

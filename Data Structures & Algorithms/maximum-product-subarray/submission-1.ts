class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let max = nums[0]!;
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            if (product === 0) product = 1;
            product *= nums[i]!;
            if (product === -0) product = Math.abs(product);
            max = Math.max(product, max);
        }

        product = 1;
        for (let j = nums.length - 1; j >= 0; j--) {
            if (product === 0) product = 1;
            product *= nums[j]!;
            if (product === -0) product = Math.abs(product);
            max = Math.max(product, max);
        }

        return max;
    }
}

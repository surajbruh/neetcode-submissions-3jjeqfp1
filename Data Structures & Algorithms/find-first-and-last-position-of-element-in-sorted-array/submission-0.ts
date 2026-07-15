class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums: number[], target: number): number[] {
        let L = 0;
        let R = nums.length - 1;
        let res: number[] = new Array(2).fill(-1);
        while (L <= R) {
            let mid = Math.floor((L + R) / 2);
            if (nums[mid] === target) {
                res.fill(mid);
                let L2 = mid + 1;
                let R2 = mid - 1;

                // lower index
                while (L <= R2) {
                    let mid2 = Math.floor((L + R2) / 2);
                    if (nums[mid2] === target) {
                        res[0] = mid2;
                        R2 = mid2 - 1;
                    } else if (nums[mid2]! < target) L = mid2 + 1;
                    else R2 = mid2 - 1;
                }

                // upper index
                while (L2 <= R) {
                    let mid3 = Math.floor((L2 + R) / 2);
                    if (nums[mid3] === target) {
                        res[1] = mid3;
                        L2 = mid3 + 1;
                    } else if (nums[mid3]! > target) R = mid3 - 1;
                    else L2 = mid3 + 1;
                }

                return res;
            } else if (nums[mid]! < target) L = mid + 1;
            else R = mid - 1;
        }
        return res;
    }
}

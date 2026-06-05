class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        const res = [];
        const sorted = arr.sort((x, y) => x - y);
        const length = sorted.length - 1;
        // const seen = new Set();
        for (let i = 0; i < length - 1; i++) {
            // if (seen.has(arr[i])) continue;
            // seen.add(arr[i]);
            if (arr[i] === arr[i - 1]) continue;
            let left = i + 1;
            let right = length;
            while (left < right) {
                if (arr[left] + arr[right] + arr[i] < 0) left++;
                else if (arr[left] + arr[right] + arr[i] > 0) right--;
                else {
                    res.push([arr[left], arr[right], arr[i]]);
                    left++;
                    right--;
                    while (arr[left] === arr[left - 1]) left++;
                    while (arr[right] === arr[right + 1]) right--;
                }
            }
        }
        return res;
    }
}

const solution = new Solution();
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = solution.threeSum(nums);
console.log(triplets);

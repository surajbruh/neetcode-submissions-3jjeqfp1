class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(arr: number[]): number[] {
        const ans = new Array(2 * arr.length);
        for (let i = 0; i < arr.length; i++) {
            ans[i] = arr[i]!;
            ans[i + arr.length] = arr[i]!;
        }
        return ans;
    }
}

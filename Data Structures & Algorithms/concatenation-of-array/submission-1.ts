class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(arr: number[]): number[] {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            arr[i + n] = arr[i]!;
        }
        return arr;
    }
}

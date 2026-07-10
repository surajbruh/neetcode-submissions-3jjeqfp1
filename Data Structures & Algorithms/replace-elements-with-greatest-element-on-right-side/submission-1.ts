class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let max = i + 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j]! > arr[max]!) max = j;
            }
            arr[i] = arr[max]!;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}

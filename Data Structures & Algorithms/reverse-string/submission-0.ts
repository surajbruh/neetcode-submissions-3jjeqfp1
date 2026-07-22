class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let L = 0;
        let R = s.length - 1;
        while (L < R) {
            [s[L], s[R]] = [s[R]!, s[L]!];
            L++;
            R--;
        }
        console.log(s);
    }
}

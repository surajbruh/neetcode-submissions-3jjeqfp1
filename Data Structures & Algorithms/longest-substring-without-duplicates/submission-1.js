class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(S) {
        let l = 0;
        let r = 0;
        let maxLen = 0;
        const seen = new Set();
        while (r < S.length) {
            let sub = S.slice(l, r + 1);
            if (seen.has(S[r])) {
                seen.delete(S[l]);
                l++;
            } else {
                seen.add(S[r]);
                maxLen = Math.max(maxLen, sub.length);
                r++;
            }
        }
        return maxLen;
    }
}
const solution = new Solution();
console.log(solution.lengthOfLongestSubstring("zxyzxyz"));
console.log(solution.lengthOfLongestSubstring("xxxx"));

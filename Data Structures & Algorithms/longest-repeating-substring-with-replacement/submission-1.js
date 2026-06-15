class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxLen = 0;
        const freq = new Map();
        for (let r = 0; r < s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);

            let maxFreq = 0;
            for (const [key, value] of freq) maxFreq = Math.max(maxFreq, value);

            let windowSize = r - l + 1;
            while (windowSize - maxFreq > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
                windowSize = r - l + 1;
            }

            maxLen = Math.max(maxLen, windowSize);
        }
        return maxLen;
    }
}

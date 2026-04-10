class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;
        const stringLength = s.length;
        const seen = new Set();
        for (let index = 0; index < stringLength; index++) {
            if (seen.has(s[index])) continue;
            let string1ElementCounter = 0;
            let string2ElementCounter = 0;
            for (let innerIndex = 0; innerIndex < stringLength; innerIndex++) {
                if (s[index] === s[innerIndex])
                    string1ElementCounter++;
                if (s[index] === t[innerIndex])
                    string2ElementCounter++;
            }
            // console.log(string1ElementCounter, string2ElementCounter);
            if (string1ElementCounter !== string2ElementCounter)
                return false;
            seen.add(s[index]);
        }
        return true;
    }
}

const s = "racecar";
const t = "carrace";

const x = new Solution()
console.log(x.isAnagram(s, t))
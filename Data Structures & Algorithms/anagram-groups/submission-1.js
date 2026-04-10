class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(string1, string2) {
        if (string1.length !== string2.length)
            return false;
        const stringLength = string1.length;
        for (let index = 0; index < stringLength; index++) {
            let string1ElementCounter = 0;
            let string2ElementCounter = 0;
            for (let innerIndex = 0; innerIndex < stringLength; innerIndex++) {
                if (string1[index] === string1[innerIndex])
                    string1ElementCounter++;
                if (string1[index] === string2[innerIndex])
                    string2ElementCounter++;
            }
            //   console.log(string1ElementCounter, string2ElementCounter);
            if (string1ElementCounter !== string2ElementCounter)
                return false;
        }
        return true;
    }
    groupAnagrams(strs) {
        const list = [];
        const seen = new Array(strs.length).fill(false);
        for (let i = 0; i < strs.length; i++) {
            const subList = [];
            if (seen[i])
                continue;
            for (let j = i + 1; j < strs.length; j++) {
                if (seen[j])
                    continue;
                // console.log(`string1: ${strs[i]}, string2: ${strs[j]}`);
                if (this.isAnagram(strs[i], strs[j])) {
                    subList.push(strs[j]);
                    seen[j] = true;
                }
            }
            subList.push(strs[i]);
            seen[i] = true;
            list.push(subList);
        }
        if (typeof list === "undefined")
            return [];
        return list;
    }
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
const x = new Solution();
console.log(x.groupAnagrams(strs));
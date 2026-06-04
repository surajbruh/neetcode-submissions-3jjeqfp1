class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g, "");
        const newClean = clean.toLowerCase().split(" ").join("");
        const arr = newClean.split("");

        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left++] !== arr[right--]) return false;
        }
        return true;
    }
}
const phrase = "Was it a car or a cat I saw?";
const mySolution = new Solution();
console.log(mySolution.isPalindrome(phrase));

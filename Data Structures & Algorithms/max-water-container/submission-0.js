class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(lines) {
        let maxArea = 0;
        let left = 0;
        let right = lines.length - 1;
        while (left < right) {
            const width = right - left;
            const area = Math.min(lines[left], lines[right]) * width;
            maxArea = Math.max(maxArea, area);
            if (lines[left] < lines[right]) left++;
            else right--;
        }
        return maxArea;
    }
}
const height = [1, 7, 2, 5, 4, 7, 3, 6];
const solution = new Solution();
const res = solution.maxArea(height);
console.log(res);

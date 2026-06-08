class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let water = 0;
        let maxL = 0;
        let maxR = 0;
        while (l < r) {
            if (height[l] < height[r]) {
                maxL = Math.max(maxL, height[l]);
                water += maxL - height[l];
                l++;
            } else {
                maxR = Math.max(maxR, height[r]);
                water += maxR - height[r];
                r--;
            }
        }
        return water;
    }
}

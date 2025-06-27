/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLen = 0; // 记录最大长度
    let left = 0; // 滑动窗口左指针
    let cnt0 = 0; // 统计窗口内 0 的个数

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) cnt0++; // 统计当前窗口内的 0

        // 如果 0 的数量超过 k，需要移动左指针缩小窗口
        while (cnt0 > k) {
            if (nums[left] === 0) cnt0--; // 移出一个 0
            left++; // 左指针右移
        }

        // 计算当前窗口的最大长度
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
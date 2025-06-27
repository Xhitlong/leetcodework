/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0; // 记录最大矩形面积
    const stack = [-1]; // 单调递增栈，存储柱子的索引，初始化左哨兵

    for (let i = 0; i <= heights.length; i++) {
        // 处理右哨兵：当 `i == heights.length` 时，当前柱子高度设为 -1
        const currentHeight = (i === heights.length) ? -1 : heights[i];

        // 只要栈顶柱子的高度比当前柱子高，就计算以它为高度的最大矩形面积
        // 因为初始有一个-1的哨兵，所以这里的判断是stack.length > 1，而不是stack.length > 0
        while (stack.length > 1 && heights[stack[stack.length - 1]] > currentHeight) {
            const h = heights[stack.pop()]; // 栈顶元素弹出，获取高度
            const w = i - stack[stack.length - 1] - 1; // 计算宽度
            maxArea = Math.max(maxArea, h * w); // 更新最大面积
        }

        stack.push(i); // 当前柱子入栈
    }

    return maxArea; // 返回最大矩形面积
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let length = temperatures.length;
    let ans = new Array(length).fill(0); // 结果数组，默认填充 0
    let stack = []; // 单调递减栈，存储索引

    for (let i = 0; i < length; i++) {
        let temperature = temperatures[i];

        // 栈不为空 && 当前温度高于栈顶索引对应的温度
        while (stack.length > 0 && temperature > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop(); // 取出索引
            ans[prevIndex] = i - prevIndex; // 计算等待天数
        }

        stack.push(i); // 当前索引入栈
    }

    return ans;
};
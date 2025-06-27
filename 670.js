/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const str = num.toString(); // 将数字转为字符串，方便按位操作
    let maxIdx = str.length - 1; // 当前“最大数字”的索引，初始为最后一位
    let swapLeft = -1, swapRight = 0; // 初始化交换位置为无效状态

    // 从倒数第二位开始向前遍历
    for (let i = str.length - 2; i >= 0; i--) {
        // 如果当前位大于当前记录的最大值，更新 maxIdx
        if (str[i] > str[maxIdx]) {
            maxIdx = i;
        }
        // 如果当前位小于 maxIdx 位置的数字，就记录为可交换的位置
        else if (str[i] < str[maxIdx]) {
            swapLeft = i;      // 左边是较小的数字
            swapRight = maxIdx; // 右边是较大的数字
        }
    }

    // 没有发现可交换的情况，说明已是最大，直接返回
    if (swapLeft === -1) return num;

    // 执行交换操作
    const chars = str.split('');
    [chars[swapLeft], chars[swapRight]] = [chars[swapRight], chars[swapLeft]];

    // 转为整数返回
    return parseInt(chars.join(''));
};
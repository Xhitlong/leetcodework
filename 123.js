/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;

    let buy1 = -prices[0]; // 第一次买入的最小成本
    let sell1 = 0;         // 第一次卖出的最大利润
    let buy2 = -prices[0]; // 第二次买入的最小成本
    let sell2 = 0;         // 第二次卖出的最大利润

    for (let i = 1; i < n; i++) {
        buy1 = Math.max(buy1, -prices[i]);      // 以最低价格买入第一次
        sell1 = Math.max(sell1, buy1 + prices[i]); // 以最高价格卖出第一次
        buy2 = Math.max(buy2, sell1 - prices[i]);  // 以最低价格买入第二次（用第一次的利润）
        sell2 = Math.max(sell2, buy2 + prices[i]); // 以最高价格卖出第二次
    }

    return sell2; // 返回最大利润
};
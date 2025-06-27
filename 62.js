/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 初始化一个 m 行 n 列的二维数组
    // 所有位置先填 0，方便后续赋值
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // 初始化第一行和第一列为 1
    // 因为走到这些位置只能有一种方式：一直往右或一直往下
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // 遍历除去第一行和第一列的其他格子
    // 根据状态转移方程 dp[i][j] = dp[i-1][j] + dp[i][j-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // 返回右下角的路径总数
    return dp[m - 1][n - 1];
};
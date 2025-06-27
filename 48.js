var rotate = function(matrix) {
    const n = matrix.length;
    // 第一步：转置
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) { // 遍历对角线下方元素
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    // 第二步：行翻转
    for (const row of matrix) {
        row.reverse();
    }
};
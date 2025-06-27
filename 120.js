var minimumTotal = function(f) {
    for (let i = f.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            f[i][j] += Math.min(f[i + 1][j], f[i + 1][j + 1]);
        }
    }
    return f[0][0];
};
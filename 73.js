var setZeroes = function(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;

    var map1 = {};
    var map2 = {};

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
        if (matrix[i][j] === 0) {
            map1[i] = i;
            map2[j] = j;
        }
        }
    }
    

    for (var i in map1) {
        for (var j = 0; j < col; j++) {
        matrix[i][j] = 0;
        }
    }

    for (var i in map2) {
        for (var j = 0; j < row; j++) {
        matrix[j][i] = 0;
        }
    }
    return matrix;
};
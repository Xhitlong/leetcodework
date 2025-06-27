var isValidSudoku = function(board) {
    let rows = new Array(9).fill(0)
    let cols = new Array(9).fill(0)
    let boxes = new Array(9).fill(0)
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j]
            if (num === '.') continue
            
            // 究极位运算
            const mask = 1 << (num - '0')
            const boxIndex = ~~(i / 3) * 3 + ~~(j / 3)
            
            if ((rows[i] & mask) || (cols[j] & mask) || (boxes[boxIndex] & mask)) 
                return false
                
            rows[i] |= mask
            cols[j] |= mask
            boxes[boxIndex] |= mask
        }
    }
    return true
}
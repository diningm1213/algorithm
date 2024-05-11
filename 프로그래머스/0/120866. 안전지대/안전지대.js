function solution(board) {
    const dangerArea = [
        [1, -1],[1, 0],[1, 1],
        [0, -1], [0, 1],
        [-1, -1],[-1, 0],[-1, 1],
    ]
    board.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) {
                dangerArea.forEach(([_y, _x]) => {
                    if (board[y - _y]?.[x - _x] === 0) {
                        board[y - _y][x - _x] = 2;
                    } 
                });
            }
        });
    });
    
    return board.reduce((totalZeroCount, row) => totalZeroCount + row.reduce((rowZeroCount, cell) => rowZeroCount + (cell ? 0 : 1), 0), 0);
}
function solution(board, k) {
    return board.reduce((total, row, y) => total + row.reduce((acc, cur, x) => y + x <= k ? acc + cur : acc, 0), 0);
}
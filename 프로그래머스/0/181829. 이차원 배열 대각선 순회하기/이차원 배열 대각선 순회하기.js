function solution(board, k) {
    let ans = 0;
    
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (y + x <= k) {
                ans += board[y][x];
            }
        }
    }
    
    return ans;
}
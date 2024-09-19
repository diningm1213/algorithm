function solution(m, n, puddles) {
    const board = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
    puddles.forEach(([x, y]) => {
        board[y][x] = -1;  
    });
    
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (y === 1 && x === 1) {
                board[y][x] = 1;
                continue;
            }
            if (board[y][x] === -1) {
                continue;
            }
            
            let value = 0;
            if (board[y - 1][x] !== -1) {
                value += board[y - 1][x];
            }
            if (board[y][x - 1] !== -1) {
                value += board[y][x - 1];
            }
            
            board[y][x] = value % 1_000_000_007;
        }
    }
    
    return board[n][m];
}
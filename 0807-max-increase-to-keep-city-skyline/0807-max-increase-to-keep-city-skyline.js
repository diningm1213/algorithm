/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let answer = 0;
    const n = grid.length;
    const maxRows = Array(n).fill(0);
    const maxCols = Array(n).fill(0);
    for (let y = 0; y < n; y++) {
        for (let i = 0; i < n; i++) {
            if (maxRows[i] < grid[y][i]) {
                maxRows[i] = grid[y][i];
            }
            if (maxCols[i] < grid[i][y]) {
                maxCols[i] = grid[i][y];
            }
        }
    }

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            const min = Math.min(maxRows[y], maxCols[x]);
            answer += min - grid[y][x];
        }
    }

    return answer;
};
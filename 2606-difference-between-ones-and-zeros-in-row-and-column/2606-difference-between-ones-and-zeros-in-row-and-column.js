/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const diff = Array.from(Array(m), () => Array(n));
    let rows = Array.from(Array(m), () => Array(2).fill(0));
    let cols = Array.from(Array(n), () => Array(2).fill(0));
    

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rows[i][grid[i][j]] += 1;
            cols[j][grid[i][j]] += 1;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = rows[i][1] + cols[j][1] - rows[i][0] - cols[j][0];
        }
    }

    return diff;
};
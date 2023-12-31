/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let answer = 0;
    const n = grid.length;
    const maxRows = [];
    const maxCols = [];
    for (let y = 0; y < n; y++) {
        let maxRow = grid[y][0];
        let maxCol = grid[0][y];
        for (let x = 0; x < n; x++) {
            maxRow = Math.max(maxRow, grid[y][x]);
            maxCol = Math.max(maxCol, grid[x][y]);
        }
        maxRows.push(maxRow);
        maxCols.push(maxCol);
    }

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            answer += Math.min(maxRows[y], maxCols[x]) - grid[y][x];
        }
    }

    return answer;
};
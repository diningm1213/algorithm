/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    // 0-0 0, 0-1 1, 0-2 2,  0-3 3
    // 1-0 4, 1-1 5, 1-2 6,  1-3 7 
    // 2-0 8, 2-1 9, 2-2 10, 2-3 11
    const m = mat.length;
    const n = mat[0].length;
    const diagonals = [];

    const getDiagonalCells = (y, x) => {
        const cells = [];
        while (y < m && x < n) {
            cells.push(mat[y][x])
            y++;
            x++;
        }

        return cells;
    }

    const setDiagonalCells = (y, x, cells) => {
        let index = 0;
        while (y < m && x < n) {
            mat[y][x] = cells[index];
            y++;
            x++;
            index++;
        }
    }
    
    for (let y = m - 1; y >= 0; y--) {
        diagonals.push(getDiagonalCells(y, 0));
    }
    // 0, 0 제외
    for (let x = 1; x < n; x++) {
        diagonals.push(getDiagonalCells(0, x));
    }

    diagonals.forEach(diagonal => {
        diagonal.sort((a, b) => a - b);
    });

    let index = 0;
    for (let y = m - 1; y >= 0; y--) {
        diagonals.push(setDiagonalCells(y, 0, diagonals[index++]));
    }
    for (let x = 1; x < n; x++) {
        diagonals.push(setDiagonalCells(0, x, diagonals[index++]));
    }

    return mat;
};
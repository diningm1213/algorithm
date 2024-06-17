function solution(arr) {
    return arr.every((r, i) => r.every((c, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}
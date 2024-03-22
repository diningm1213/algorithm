function solution(arr1, arr2) {
    return arr1.map((row, y) => row.map((cell, x) => cell + arr2[y][x]));
}
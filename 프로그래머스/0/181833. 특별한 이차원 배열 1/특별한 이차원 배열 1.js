function solution(n) {
    return Array.from(Array(n), (_, i) => Array(n).fill(0).map((v, j) => Number(i === j)));
}
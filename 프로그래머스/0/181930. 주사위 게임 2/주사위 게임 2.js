function solution(a, b, c) {
    const set = new Set([a, b, c]);
    return Array(4 - set.size).fill(0).reduce((acc, _, i) => acc * (a ** (i + 1) + b ** (i + 1) + c ** (i + 1)), 1);
}
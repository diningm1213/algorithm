function solution(a, d, included) {
    return included.reduce((acc, cur, i) => cur ? acc + i * d + a : acc, 0)
}
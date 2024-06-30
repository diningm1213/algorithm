function solution(a, d, included) {
    const len = included.length;
    return Array.from(Array(len), (_, i) => a + d * i)
        .filter((_, i) => included[i])
        .reduce((acc, cur) => acc + cur, 0);
}
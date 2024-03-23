function solution(n) {
    return parseInt(BigInt([...n.toString(3)].reverse().join('')), 3);
}
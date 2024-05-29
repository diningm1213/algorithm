function solution(n, control) {
    const controlMap = { 'w': 1, 's': -1, 'd': 10, 'a': -10 };
    return n + [...control].reduce((acc, cur) => acc + controlMap[cur], 0);
}
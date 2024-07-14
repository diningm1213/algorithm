function solution(array, n) {
    return array.sort((a, b) => a - b).reduce((acc, cur) => Math.abs(acc - n) <= Math.abs(cur - n) ? acc : cur);
}
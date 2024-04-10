function solution(box, n) {
    return box.map(line => parseInt(line / n)).reduce((acc, cur) => acc * cur, 1);
}
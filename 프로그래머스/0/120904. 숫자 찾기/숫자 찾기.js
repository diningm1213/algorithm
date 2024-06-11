function solution(num, k) {
    const i = String(num).indexOf(k);
    return i === -1 ? i : i + 1;
}
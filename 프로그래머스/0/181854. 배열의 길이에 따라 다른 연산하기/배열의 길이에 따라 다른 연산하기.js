function solution(arr, n) {
    const isEven = arr.length % 2 === 0;
    return arr.map((v, i) => (isEven && i % 2 === 1) || (!isEven && i % 2 === 0) ? v + n : v);
}
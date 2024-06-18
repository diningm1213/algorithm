function solution(arr, idx) {
    const i = arr.slice(idx).indexOf(1)
    return i !== -1 ? i + idx : i;
}
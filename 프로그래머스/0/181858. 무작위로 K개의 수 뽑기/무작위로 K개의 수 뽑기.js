function solution(arr, k) {
    const set = new Set(arr);
    const size = set.size;
    
    return size < k ? [...set, ...Array(k - size).fill(-1)] : [...set].slice(0, k);
}
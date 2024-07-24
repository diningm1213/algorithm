function solution(strArr) {
    const arr = Array(31).fill(0);
    strArr.forEach(str => arr[str.length]++);
    
    return Math.max(...arr);
}
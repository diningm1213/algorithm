function solution(n, left, right) {
    const arr = [];
    
    for (left; left <= right; left++) {
        arr.push(Math.max(parseInt(left / n), left % n) + 1);
    }
    
    return arr;
}
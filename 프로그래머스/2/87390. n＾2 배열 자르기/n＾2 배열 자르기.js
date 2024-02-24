function solution(n, left, right) {
    const arr = [];
    
    for (left; left <= right; left++) {
        const quotient = Number.parseInt(left / n);
        const remainder = left % n;
        
        arr.push(Math.max(quotient, remainder) + 1);
    }
    
    return arr;
}
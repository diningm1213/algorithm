function solution(num, total) {
    const start = parseInt(total / num) - parseInt((num - 1) / 2);
    
    return Array.from(Array(num), (_, i) => i + start);
}
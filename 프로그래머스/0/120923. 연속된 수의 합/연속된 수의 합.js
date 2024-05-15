function solution(num, total) {
    const start = parseInt(total / num) - parseInt((num - 1) / 2);
    
    return Array(num).fill(start).map((v, i) => v + i);
}
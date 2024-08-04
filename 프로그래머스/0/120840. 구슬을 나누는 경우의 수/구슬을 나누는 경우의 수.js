function solution(balls, share) {
    const factorial = [1];
    let n = 1;
    for (let i = 1; i <= 30; i++) {
        n *= i;
        factorial.push(n);
        
    }
    
    return Math.round(factorial[balls] / (factorial[balls - share] * factorial[share]));
}
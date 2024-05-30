function solution(a, b) {
    const isOddA = Boolean(a % 2);
    const isOddB = Boolean(b % 2);
    
    return isOddA && isOddB ? a ** 2 + b ** 2 : !isOddA && !isOddB ? Math.abs(a - b) : (a + b) * 2;
}
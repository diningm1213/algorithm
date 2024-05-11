function getGCD (a, b) {
    return b ? getGCD(b, a % b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    const gcd = getGCD(denom, numer);
    
    return [numer / gcd, denom / gcd];
}
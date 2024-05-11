function gcd (a, b) {
    return b ? gcd(b, a % b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2 / gcd(denom1, denom2);
    const numer = numer1 * (denom / denom1) + numer2 * (denom / denom2);
    const divider = gcd(denom, numer);
    
    return [numer / divider, denom / divider];
}
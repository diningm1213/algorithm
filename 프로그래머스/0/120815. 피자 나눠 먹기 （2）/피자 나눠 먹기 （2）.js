const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
}

function solution(n) {
    return n / gcd(n, 6);
}
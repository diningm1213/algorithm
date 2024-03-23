const gcd = (a, b) => {
    let r = a % b;
    if (r === 0) {
        return b;
    }
    return gcd(b, r);
}

function solution(n, m) {
    const k = gcd(n, m);
    return [k, n * m / k];
}
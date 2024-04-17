const gcd = (a, b) => {
    const r = a % b;
    if (r === 0) {
        return b;
    }
    return gcd(b, r);
}

function solution(arr) {
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur), 1);
}
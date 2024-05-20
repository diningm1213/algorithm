const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
}

function solution(a, b) {
    b = b / gcd(a, b);
    while (true) {
        if (b % 2 === 0) {
            b /= 2;
        } else if (b % 5 === 0) {
            b /= 5;
        } else {
            break;
        }
    }
    
    return b > 1 ? 2 : 1;
}
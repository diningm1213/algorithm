const gcd = (a, b) => {
    const r = a % b;
    if (r === 0) {
        return b;
    }
    return gcd(b, r);
}

function solution(arr) {
    let lcm = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        lcm = lcm * arr[i] / gcd(lcm, arr[i]);    
    }
    
    return lcm;
}
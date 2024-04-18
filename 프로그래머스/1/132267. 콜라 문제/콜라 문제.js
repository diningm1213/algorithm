function solution(a, b, n) {
    let ans = 0;
    
    while (n >= a) {
        const newCoke = parseInt(n / a) * b;
        ans += newCoke;
        n = newCoke + n % a;
    }
    
    return ans;
}
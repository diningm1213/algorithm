function solution(sides) {
    let ans = 0;
    sides.sort((a, b) => b - a);
    
    ans += sides[0] - (sides[0] + 1 - sides[1]) + 1
    ans += sides[1] - 1;
    
    return ans;
}
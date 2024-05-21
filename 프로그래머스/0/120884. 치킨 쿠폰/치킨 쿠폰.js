function solution(chicken) {
    let ans = 0;
    
    while (chicken >= 10) {
        const coupon = parseInt(chicken / 10);
        chicken = chicken - coupon * 10 + coupon;
        ans += coupon;
    }
    
    return ans;
}
function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i;
    }
    
    totalPrice -= money;
    
    return totalPrice > 0? totalPrice : 0;  
}
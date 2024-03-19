function solution(toppings) {
    let ans = 0;
    const old = new Map();
    const young = new Map();
    
    toppings.forEach(topping => {
        young.set(topping, (young.get(topping) || 0) + 1);
    });
    
    toppings.forEach(topping => {
        old.set(topping, 1);
        if (young.get(topping) === 1) {
            young.delete(topping);
        } else {
            young.set(topping, (young.get(topping) || 0) - 1);    
        }
        
        if (old.size === young.size) {
            ans++;
        }
    });
    
    return ans;
}
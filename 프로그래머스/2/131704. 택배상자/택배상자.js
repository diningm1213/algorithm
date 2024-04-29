function solution(order) {
    let ans = 0;
    let subBelt = [];
    
    for (let i = 1; i <= order.length; i++) {
        if (order[ans] === i) {
            ans++;
        } else {
            subBelt.push(i);
        }
        
        while (subBelt.length) {
            if (subBelt.at(-1) === order[ans]) {
                ans++;
                subBelt.pop();
            } else {
                break;
            }    
        }
        
    }
    
    return ans;
}
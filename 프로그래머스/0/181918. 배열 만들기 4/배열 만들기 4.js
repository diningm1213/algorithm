function solution(arr) {
    const stk = [];
    let i = 0;
    
    while (i < arr.length) {
        const cur = arr[i];
        
        if (stk.length === 0) {
            stk.push(cur);
            i++;
        } else {
            const last = stk.at(-1);
            if (last < cur) {
                stk.push(cur);
                i++;
            } else {
                stk.pop();
            }
        }
    }
    
    return stk;
}
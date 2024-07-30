function solution(arr) {
    const stk = [];
    
    arr.forEach((v, i) => {
        if (stk.length && stk.at(-1) === v) {
            stk.pop();
        } else {
            stk.push(v)
        }
    })
    return stk.length ? stk : [-1];
}
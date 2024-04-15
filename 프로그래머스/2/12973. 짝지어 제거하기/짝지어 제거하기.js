function solution(s) {
    if (s.length % 2 === 1) {
        return 0;
    }
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if (stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.length ? 0 : 1;
}
function solution(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        const lastStackIndex = stack.length - 1;
        if (lastStackIndex >= 1) {
            if (stack[lastStackIndex] === stack[lastStackIndex - 1]) {
                stack.splice(-2);
            }
        }
    }
    
    return stack.length ? 0 : 1;
}
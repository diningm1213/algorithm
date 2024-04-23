function solution(s) {
    let ans = 0;
    let stack = [];
    s = [...s];
    
    for (let i = 0, len = s.length; i < len; i++) {
        stack = [];
        for (let j = 0; j < len; j++) {
            const c = s[j];
            
            if (c === ')' && stack.at(-1) === '(' ||
                c === ']' && stack.at(-1) === '[' ||
                c === '}' && stack.at(-1) === '{') {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        
        if (stack.length === 0) {
            ans++;
        }
        const temp = s.shift();
        s.push(temp);
    }
    
    return ans;
}
function solution(msg) {
    const ans = [];
    const msgMap = new Map();
    let s = '';
    
    for (let i = 0; i < 26; i++) {
        msgMap.set(String.fromCharCode('A'.charCodeAt() + i), i + 1);
    }
    
    for (let i = 0; i < msg.length; i++) {
        s += msg[i];
        if (!msgMap.has(s)) {
            msgMap.set(s, msgMap.size + 1);
            const prevS = s.substring(0, s.length - 1);
            ans.push(msgMap.get(prevS));
            s = '';
            i--;
        }
    }
    ans.push(msgMap.get(s));
    
    return ans;
}
    